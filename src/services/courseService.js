import httpRequest from '~/utils/httpRequest';

const getCombinedCourse = async () => {
    return await httpRequest.get('/home/combined-courses').then((res) => res.data);
};
const getCourseBySlug = async (slug) => {
    return await httpRequest.get('/courses/' + slug).then((res) => res.data);
};
export { getCombinedCourse, getCourseBySlug };
