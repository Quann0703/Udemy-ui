import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import MarkdownIt from 'markdown-it';
import markdownItIns from 'markdown-it-ins';

import styles from './MarkdownParser.module.scss';

const cx = classNames.bind(styles);
function MarkdownParser({ content, style, className }) {
    const mdParser = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        langPrefix: 'language-js',
        highlight: function (str, lang) {
            return `<pre class="language-js"><code class="language-js">${mdParser.utils.escapeHtml(str)}</code></pre>`;
        },
    }).use(markdownItIns);

    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes} style={style}>
            {parse(mdParser.render(content))}
        </div>
    );
}

export default MarkdownParser;
