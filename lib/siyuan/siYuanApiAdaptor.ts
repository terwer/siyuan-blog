import {IApi} from "../api";
import {getRootBlocks} from "./siYuanApi";
import {Post} from "../common/post";
import {UserBlog} from "../common/userBlog";
import {API_TYPE_CONSTANTS} from "../constants";

/**
 * 思源笔记API适配器
 */
export class SiYuanApiAdaptor implements IApi {
    public async getUsersBlogs(): Promise<Array<UserBlog>> {
        let result: Array<UserBlog> = []
        // const data = await this.metaWeblog.getUsersBlogs(this.appkey, this.username, this.password);
        const userBlog = new UserBlog()
        userBlog.blogid = API_TYPE_CONSTANTS.API_TYPE_SIYUAN
        userBlog.blogName = API_TYPE_CONSTANTS.API_TYPE_SIYUAN
        userBlog.url = process.env.SIYUAN_API_URL || ""
        result.push(userBlog)

        return result;
    }

    public async getRecentPosts(numOfPosts: number): Promise<Array<any>> {
        let result: any[] = []

        const siyuanPosts = await getRootBlocks(0, numOfPosts)
        // log.logInfo(siyuanPosts)

        for (let i = 0; i < siyuanPosts.length; i++) {
            const siyuanPost = siyuanPosts[i]

            // 适配公共属性
            let commonPost = new Post()
            commonPost.postid = siyuanPost.root_id
            commonPost.title = siyuanPost.content
            result.push(commonPost)
        }

        return Promise.resolve(result);
    }
}