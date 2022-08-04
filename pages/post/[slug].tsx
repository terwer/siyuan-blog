import {GetServerSideProps, NextPage} from "next";
import {Post} from "../../lib/common/post";
import {API} from "../../lib/api";
import {API_TYPE_CONSTANTS} from "../../lib/constants";
import log from "../../lib/logUtil";
import styles from "../../components/themes/default/css/layout.module.css";
import SiteConfig from "../../lib/common/siteconfig";
import DefaultLayout from "../../components/themes/default/defaultLayout";

type Props = {
    type: string,
    propCfg: any
    post: Post
}

const PostDetail: NextPage<Props> = (props, context) => {

    function createMarkup() {
        return {__html: props.post.description};
    }

    return (
        <DefaultLayout props={props.propCfg}>
            <main className={styles.main}>
                <p>{props.post.mt_keywords}</p>
                <div dangerouslySetInnerHTML={createMarkup()}/>
            </main>
        </DefaultLayout>
    )
}

export default PostDetail

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const query = context.query || {}
    if (query.t instanceof Array) {
        throw new Error("参数类型错误")
    }

    const slug = context?.params?.slug
    if (!slug || typeof slug !== "string") {
        throw new Error("文章路径错误")
    }
    let smartSlug = ""
    if (slug.indexOf(".html") > -1) {
        smartSlug = slug.replace(".html", "")
    }

    const type = query.t || API_TYPE_CONSTANTS.API_TYPE_SIYUAN

    const api = new API(type)

    let cfg: SiteConfig = new SiteConfig()
    // 配置
    const cfgs = await api.getUsersBlogs() || []
    if (cfgs.length > 0) {
        cfg.userBlog = cfgs[0]
    }

    // 文章
    log.logInfo("smartSlug=>", smartSlug)
    const post = await api.getPost(smartSlug)

    return {
        props: {
            type: type,
            propCfg: JSON.parse(JSON.stringify(cfg)),
            post: JSON.parse(JSON.stringify(post))
        }
    }
}