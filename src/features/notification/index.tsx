import { LinkWithArrow } from "@/components/link";
import style from "./style.module.css";
import { MdBookmark } from "react-icons/md";

export const NotificationContainer = () => {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <LinkWithArrow title="わたしのこと" />
                <LinkWithArrow title="つくったもの" />
                <LinkWithArrow title="しゃしんとか" />
                <LinkWithArrow title="イベント情報" />
                <LinkWithArrow title="魔法をかける" />
            </div>
            <div className={style.content}>
                <div className={style.text}>
                    <h1 className={style.name}>写真撮影ワークショップのお知らせ</h1>
                    
                    <div className={style.section}>
                        <p className={style.title}>実施者</p>
                        <p className={style.description}>小澤知夏（筑波大学大学院 人間総合科学学術院 人間総合科学研究群 情報学学位プログラム 博士前期課程 1年 落合陽一研究室）</p>
                        <p className={style.description}>toremolo72 <span>@</span> digitalnature.slis.tsukuba.ac.jp</p>
                    </div>

                    <aside className={style.aside}>
                        <MdBookmark color="#F7C100" size={20}/>
                        <p>参加申し込みはこちら▶︎ <a href="https://forms.gle/BCrHpMuge3c4UjxV8">クリックするとGoogleフォームが開きます</a></p>
                    </aside>

                    <div className={style.section}>
                        <p className={style.title}>【リアルタイムで更新中！】各回の受け入れ人数</p>
                        <p className={style.description}>
                            8/17 午前の部：あと15名<br />
                            8/17 午後の部：あと14名<br />
                            8/20 午後の部：あと5名<br />
                            8/23 午前の部：あと15名<br />
                            8/23 午後の部：あと15名
                        </p>
                    </div>

                    <div className={style.section}>
                        <p className={style.title}>ワークショップの背景・目的</p>
                        <p className={style.description}>
                            近年，スマートフォンやデジタルカメラが普及し，誰もがボタンひとつで簡単に写真を撮れる時代になりました．
                            しかし，誰もがもっているからこそ，写真撮影がひとりで完結するものになってしまっていると考えています．
                            写ルンですの時代は，1つのカメラをシェアして使用したりするなど，複数人で集まって写真を撮っていました．
                            現代にあえて「複数人で集まって写真を撮る」という体験を生み出すために，新しいカメラの開発に取り組んでいます．
                        </p>
                        <p className={style.description}>
                            特に，デジタルネイティブの子供たちが体験したことのない「自撮りじゃない方法で，みんなで楽しむ写真」を
                            どのように実現するかを研究しております．研究の過程で開発したカメラや道具を用いて，ワークショップを通じて
                            写真撮影をすることで，普段みている世界に対して，新しい発見や気づきが得られることを期待しています．
                        </p>
                    </div>

                    <div className={style.section}>
                        <p className={style.title}>ワークショップの内容</p>
                        <ul className={style.list}>
                            <li>カメラのレンズの前にいろんなものを置いて写真を撮るワークショップです</li>
                            <li>レンズの前に置くものを工作し，作った物を使って写真を撮影します</li>
                            <li>推し活フォトのように，好きなキャラクターのアクリルスタンドや，キーホルダーなどを持ち寄ったりして撮影することもできます</li>
                            <li>3~5人1組で実施するので，お友達と一緒に参加することもできます</li>
                        </ul>
                    </div>

                    <div className={style.section}>
                        <p className={style.title}>参考リンク</p>
                        <div className={style.reference}>
                            <p>レンズ前にいろんなものを置いて写真を撮る事例の参考：</p>
                            <li>
                                <a href="https://nij.nikon.com/nicostop/entry/technic/100-yen/2023/02/28/1" target="_blank" rel="noopener noreferrer">
                                    100円ショップのアイテムで作る！カメラのレンズの前に置くもので、写真を撮る
                                </a>
                            </li>
                            <li>
                                <a href="https://animeanime.jp/article/2022/02/19/67665.html" target="_blank" rel="noopener noreferrer">
                                    アニメキャラクターの推し活フォトを撮るためのコツとは？
                                </a>
                            </li>
                        </div>
                    </div>

                    <div className={style.section}>
                        <p className={style.title}>ワークショップの流れ（約3時間のプログラム）</p>
                        <table className={style.table}>
                            <thead>
                                <tr>
                                    <th>流れ</th>
                                    <th>内容</th>
                                    <th>所用時間</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>受付</td>
                                    <td>出席確認、同意書回収（未成年は保護者署名原本）</td>
                                    <td>15 分</td>
                                </tr>
                                <tr>
                                    <td>ガイダンス</td>
                                    <td>研究説明・グループ分け・撮影機材説明</td>
                                    <td>15 分</td>
                                </tr>
                                <tr>
                                    <td>自己紹介</td>
                                    <td>参加者・スタッフとの交流</td>
                                    <td>5 分</td>
                                </tr>
                                <tr>
                                    <td>制作ワーク</td>
                                    <td>用意/持参した素材でフィルター（2 種類以上）制作</td>
                                    <td>30 分</td>
                                </tr>
                                <tr>
                                    <td>休憩</td>
                                    <td></td>
                                    <td>10 分</td>
                                </tr>
                                <tr>
                                    <td>撮影ワーク</td>
                                    <td>グループで屋外撮影</td>
                                    <td>30 分</td>
                                </tr>
                                <tr>
                                    <td>休憩</td>
                                    <td></td>
                                    <td>10 分</td>
                                </tr>
                                <tr>
                                    <td>鑑賞</td>
                                    <td>写真と制作品を自由鑑賞</td>
                                    <td>20 分</td>
                                </tr>
                                <tr>
                                    <td>感想共有</td>
                                    <td>全員が順番に発表・質疑応答（最大 60 分）</td>
                                    <td>1 分×人数＋15 分</td>
                                </tr>
                                <tr>
                                    <td>事後アンケート</td>
                                    <td>Google Form 又は紙回答</td>
                                    <td>10 分</td>
                                </tr>
                                <tr>
                                    <td>任意インタビュー</td>
                                    <td>座談会形式（希望者のみ）</td>
                                    <td>最長 60 分</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={style.section}>
                        <p className={style.title}>実施日程</p>
                        <p className={style.description}>実施場所：筑波大学春日エリア構内（TXつくば駅から徒歩８分）</p>
                        <p className={style.description}>
                            対象の枠の日程が合わない場合は，他の枠に申し込んでもらっても構いません．<br/>
                            ※他の枠で参加するか迷う…などの相談も大歓迎です．お気軽にご連絡ください．（連絡先のメールアドレスはページ上部・下部それぞれに記載しています）<br/>
                            20日は半数以上が18歳以上のため，お子様に人見知りなどがある場合はご注意ください．
                        </p>
                        <table className={style.table}>
                            <thead>
                                <tr>
                                    <th>実施する枠</th>
                                    <th>対象</th>
                                    <th>集合時間</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8/17 午前の部<br />9:00~12:00</td>
                                    <td>小学生〜高校生（保護者も一緒に参加可）</td>
                                    <td>8:55</td>
                                </tr>
                                <tr>
                                    <td>8/17 午後の部<br />13:00~16:00</td>
                                    <td>小学生〜高校生（保護者も一緒に参加可）</td>
                                    <td>12:55</td>
                                </tr>
                                <tr>
                                    <td>8/20 午後の部<br />13:00~16:00</td>
                                    <td>大学生等・大人（18歳以上高校生不可）</td>
                                    <td>12:55</td>
                                </tr>
                                <tr>
                                    <td>8/23 午前の部<br />9:00~12:00</td>
                                    <td>小学生〜高校生（保護者も一緒に参加可）</td>
                                    <td>8:55</td>
                                </tr>
                                <tr>
                                    <td>8/23 午後の部<br />13:00~16:00</td>
                                    <td>小学生〜高校生（保護者も一緒に参加可）</td>
                                    <td>12:55</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={style.section}>
                        <p className={style.title}>注意事項</p>
                        <ul className={style.list}>
                            <li>各回15名を上限に実施いたしますので，応募状況によっては参加いただけない場合があります</li>
                            <li>大学によって決められた本ワークショップの実施審査に条件があるため，いかなる場合でも同意書への同意が得られない場合および未就学児以下の方はご参加いただけません</li>
                            <li>研究の一環として実施するため，ワークショップ中に写真・動画撮影をいたします</li>
                        </ul>
                    </div>

                    <aside className={style.aside}>
                        <MdBookmark color="#F7C100" size={20}/>
                        <p>参加申し込みはこちら▶︎ <a href="https://forms.gle/BCrHpMuge3c4UjxV8">クリックするとGoogleフォームが開きます</a></p>
                    </aside>

                    <p className={style.description}>
                        参加申し込みされた方に改めて詳細をお送りします，
                        小澤知夏（toremolo72 <span>@</span> digitalnature.slis.tsukuba.ac.jp）から連絡するので
                        受信できるように設定をお願いします．
                    </p>
                </div>
            </div>
        </div>
    );
};