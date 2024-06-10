import classNames from 'classnames/bind';

import styles from './Watch.module.scss';
import Header from './Header';
import Tracks from './Tracks';
import Video from './Video';
import ActionBar from '~/components/ActionBar';
import Comments from './Comments';
import { useEffect, useState } from 'react';
// import useModal from '~/hooks/useModal';
import { useSearchParams } from 'react-router-dom';
import Quiz from './Quiz';
import * as watchService from '~/services/watchService';

const cx = classNames.bind(styles);
function Watch() {
    const [isShowTracks, setIsShowTracks] = useState(true);
    const [track, setTrack] = useState([]);
    const [process, setProcess] = useState([]);
    const [lesson, setLesson] = useState([]);
    const [nextStep, setNextStep] = useState();
    const [prevStep, setPrevStep] = useState();
    const [isUpdateTrack, setIsUpdateTrack] = useState(false);
    const [isQuiz, setIsQuiz] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    // const { dispatch } = useModal();

    useEffect(() => {
        (async () => {
            const { data } = await watchService.getTracks(searchParams.get('course'));
            setTrack(data.track);
            setProcess(data.userProcess);

            if (data.userProcess.length < 1 && data.track.steps.length > 0) {
                await watchService.saveUserProcess(data.track.steps[0].uuid);
            }

            if (!searchParams.has('id')) {
                const currentStep = data.track.steps?.find(
                    (step) => step.id === data.userProcess[data.userProcess.length - 1],
                );
                if (currentStep) {
                    setSearchParams((params) => {
                        params.set('id', currentStep.uuid);
                        return params;
                    });
                } else {
                    if (data.track.steps.length > 0) {
                        setSearchParams((params) => {
                            params.set('id', data.track.steps[0].uuid);
                            return params;
                        });
                    }
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUpdateTrack]);

    useEffect(() => {
        (async () => {
            if (searchParams.has('id')) {
                const res = await watchService.getStep(searchParams.get('id'));
                // setStep(res.data.step);
                console.log(res);
                setLesson(res.data.step.lesson);
                setNextStep(res.data.nextStep);
                setPrevStep(res.data.prevStep);

                if (!process.includes(res.data.step.id)) {
                    nextStep && (await watchService.saveUserProcess(nextStep));
                    setProcess((prev) => [...prev, res.data.step.id]);
                }
            }
            // setIsQuiz(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const checkElapsedTime = (e) => {
        const interval = setInterval(async () => {
            const duration = e.target.getDuration();
            const currentTime = e.target.getCurrentTime();
            if (e.target.getPlayerState() > 1) {
                clearInterval(interval);
            }

            const step = track.steps?.find((step) => step.uuid === nextStep);
            if (process.includes(step?.id)) {
                setIsUpdateTrack(true);
                clearInterval(interval);
            } else {
                if ((currentTime / duration) * 100 > 70) {
                    nextStep && (await watchService.saveUserProcess(nextStep));
                    setIsUpdateTrack(true);
                    clearInterval(interval);
                }
            }
        }, 1000);
    };
    const handleShowTracks = () => {
        setIsShowTracks((prev) => {
            return !prev;
        });
    };

    const handleOpenQuiz = () => {
        if (lesson?.quizzes.length > 0) {
            setIsQuiz(true);
        }
    };

    const handleCloseQuiz = () => {
        setIsQuiz(false);
    };

    console.log(track.steps);
    return (
        <div className={cx('ud-main-content-wrapper')}>
            <div className={cx('ud-main-content')}>
                <Header track={track} process={process} isQuiz={isQuiz} onCloseQuiz={handleCloseQuiz} />
                {!isShowTracks && <Tracks data={track} process={process} onChangeShow={handleShowTracks} />}
                {isQuiz && lesson?.quizzes.length > 0 ? (
                    <Quiz data={lesson?.quizzes} onClose={handleCloseQuiz} />
                ) : (
                    <Video
                        allWidth={isShowTracks}
                        type="youtube"
                        video={lesson?.video}
                        content={lesson?.content}
                        title={lesson.title}
                        updatedAt={lesson.updatedAt}
                        onStateChange={checkElapsedTime}
                        hasQuiz={lesson?.quizzes && lesson?.quizzes.length > 0}
                        onOpenQuiz={handleOpenQuiz}
                    />
                )}
                <ActionBar
                    prevStep={prevStep}
                    nextStep={nextStep}
                    canNext={isUpdateTrack}
                    isShowTracks={isShowTracks}
                    onChangeShow={handleShowTracks}
                />
                <Comments isShowTracks={!isShowTracks} />
            </div>
        </div>
    );
}

export default Watch;
