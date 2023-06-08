import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Blog from '~/assets/Images/News';
import Button from '~/components/Button/Button';

function BlogHomePage() {
    const blogItems = [
        {
            id: 1,
            image: Blog.blog1,
            title: '[NEW ARRIVALS] TRẺ TRUNG VÀ THỜI THƯỢNG',
            description:
                '𝐍𝐄𝐖 𝐀𝐑𝐑𝐈𝐕𝐀𝐋𝐒“Em có thấy trời tháng Ba trong xanh,Xa chân trời đôi ba chòm mây trắng..Rong ruổi dạo chơi chuyện trò trong nắng,Nắng nhẹ nhàng, hồng hồng đến là thương”Thời tiết tháng 3 thật biết chiều lòng người, mát mẻ, dịu dàng nhưng đôi khi để lại một chút oi...',
            link: '/news',
        },
        {
            id: 2,
            image: Blog.blog2,
            title: '"CHẠM VÀO KÝ ỨC | RETURN TO OASIS" THE COLLECTION BY EVA DE EVA',
            description:
                '"𝐂𝐡𝐚̣𝐦 𝐯𝐚̀𝐨 𝐤𝐲́ 𝐮̛́𝐜 | 𝐑𝐞𝐭𝐮𝐫𝐧 𝐭𝐨 𝐎𝐚𝐬𝐢𝐬"𝐓𝐡𝐞 𝐜𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐨𝐧 𝐛𝐲 𝐄𝐯𝐚 𝐝𝐞 𝐄𝐯𝐚 CHÚNG TA THƯỜNG TÌM VỀ KÝ ỨC KHI NÀO?Là khi chớm lạnh lúc giao mùa, là khi bất chợt cảm xúc trào dâng vì những điều nhỏ nhặt, là khi tâm tình chông chênh trước những ngã rẽ,…...',
            link: '/news',
        },
    ];

    return (
        <div className="row m-0 align-items-center" data-aos="fade-up">
            <div className="blog w-100">
                <div className="col-lg-11 mx-auto">
                    <div className="section-title text-center">
                        <Button to="/news" className="heading-title">
                            Tin tức eva de eva
                        </Button>
                        <p className="view-more">
                            <Button to="/news" className="">
                                Xem tất cả
                            </Button>
                        </p>
                    </div>
                    <div className="row mt-5">
                        <div className="px-0">
                            <div className="col-lg-10 col-md-12 mx-auto d-flex flex-wrap">
                                {blogItems.map((item) => (
                                    <div
                                        className="col-md-12 col-lg-6 blog-item d-flex justify-content-between position-relative"
                                        key={item.id}
                                    >
                                        <img src={item.image} alt="" className="" />
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <Button to={item.link}>{item.title}</Button>
                                            </div>
                                            <div className="blog-des">{item.description}</div>
                                            <Button seemore2>
                                                <Button to={item.link}>
                                                    Xem thêm <FontAwesomeIcon icon={faAnglesRight} />
                                                </Button>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogHomePage;
