import Slides from '~/assets/Images/slides';
import Button from '~/components/Button/Button';

function AboutHomePage() {
    return (
        <section id="about" className="about pt-3 mt-5" data-aos="fade-up">
            <div className="row w-100">
                <div className="col-lg-7 about-image container-fluid">
                    <img src={Slides.aboutHome} alt="" />
                </div>
                <div className="col-lg-5 about-content ">
                    <div className="about-title text-center align-items-center mt-5">
                        <Button to="/" className="heading-title">
                            THE CONNECTION | SS'23 COLLECTION
                            <span className="line mx-auto" />
                        </Button>
                    </div>
                    <p className="content">
                        Kỳ nghỉ của chúng ta bắt đầu từ đây... Khép nhẹ đôi mi và rũ bỏ những ồn ào náo nhiệt, thời khắc
                        ấy mọi giác quan sẽ đánh thức 'retro time', như thể bộ lọc thời gian sẽ đưa chúng ta trở về với
                        phong cách độc đáo của thập niên 50 - nơi mà sự kết nối giữa xưa và nay, giữa cũ và mới, sẽ tạo
                        nên một bối cảnh tràn ngập năng lượng vui vẻ và hạnh phúc.
                    </p>
                    <Button to="/" seemore>
                        Tìm hiểu thêm
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default AboutHomePage;
