
type User = {
    name: string,
    accountName: string,
    image: string
}

type Body = {
    text: string,
    image?: string
}

type Analytics = {
    rep: number,
    rt: number,
    like: number
}

type Path = [string, string, string]


type TweetProps = {
    type: "tweet"
    user: User
    body: Body
    analytics: Analytics
    path: Path
}

type RetweetProps = {
    type: "retweet"
    retweetedUser: string
    user: User
    body: Body
    analytics: Analytics
    path: Path

}

type PromotionProps = {
    type: "promotion"
    user: User
    body: Body
    analytics: Analytics
    path: Path
}

type TwitterCardProps = TweetProps | RetweetProps | PromotionProps

export const TwitterCard = (props: TwitterCardProps) => {
    return (
        (
            <div className="bg-gray-200 pt-20 pb-80 flex items-center justify-center">
                <div className="bg-white border-gray-200 p-4 rounded-xl border max-w-xl min-w-[480px]">

                    <div className="flex items-center">
                        <img
                            className="h-11 w-11 rounded-full"
                            alt=""
                            src={props.user.image}
                        />

                        <div className="ml-1.5 text-sm leading-tight">
                            <span className="text-black font-bold block ">
                                {props.type === "promotion" ? "プロモーション広告" : null}
                                {props.type === "tweet" ? "通常ツイート" : null}
                                {props.type === "retweet" ? "リツイート" : null}
                                <p>{props.user.name}</p>
                            </span>
                            <span className="text-gray-500 font-normal block">{`@${props.user.accountName}`}</span>

                        </div>
                    </div>


                    {/* 本文 */}
                    <p className="text-black block text-xl leading-snug mt-3">
                        {props.body.text}
                    </p>
                    {props.body.image ? <img src={props.body.image} alt="" /> : null}
                    <p className="text-gray-500 text-base py-1 my-0.5">
                        11:22 AM · 2021年12月1日
                    </p>
                    {/* 統計 */}
                    <div className="border-gray-200 border border-b-0 my-1" />
                    <div className="text-gray-500 flex mt-3">
                        <div className="flex items-center mr-6">
                            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
                                <g>
                                    <path d={props.path[0]}></path>
                                </g>
                            </svg>
                            <span className="ml-3">{props.analytics.rep}</span>
                        </div>
                        <div className="flex items-center mr-6">
                            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
                                <g>
                                    <path d={props.path[1]}></path>
                                </g>
                            </svg>
                            <span className="ml-3">{props.analytics.rt}</span>
                        </div>
                        <div className="flex items-center mr-6">
                            <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
                                <g>
                                    <path d={props.path[2]}></path>
                                </g>
                            </svg>
                            <span className="ml-3">{props.analytics.like}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}