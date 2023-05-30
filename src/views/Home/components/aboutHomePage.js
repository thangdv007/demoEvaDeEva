import Button from '~/components/Button/Button';

function AboutHomePage() {
    return (
        <section id="about" className="about pt-3 mt-5" data-aos="fade-up">
            <div className="row w-100">
                <div className="col-lg-7 about-image container-fluid">
                    <img src="assets/images/abouts/home_aboutus.png" alt="" />
                </div>
                <div className="col-lg-5 about-content ">
                    <div className="about-title text-center align-items-center mt-5">
                        <Button to="/" className="heading-title">
                            Love more
                            <span className="line mx-auto" />
                        </Button>
                    </div>
                    <p className="content">
                        Tình yêu là gì? Là cái ôm siết chặt, cái nắm tay ấm áp hay một nụ hôn khẽ chạm cũng đủ làm tim
                        bồi hồi thổn thức. Tình yêu dắt ta qua những cung bậc của cảm xúc, có lúc lắng đọng, có lúc lại
                        cuồng nhiệt đắm say. Trước những bấp bênh trong cuộc đời, tình yêu còn là liều thuốc kì diệu để
                        chữa lành cho tâm hồn đang còn vết xước. Với 𝐋𝐎𝐕𝐄 𝐌𝐎𝐑𝐄, Eva de Eva tái hiện hình ảnh cô gái đang
                        khoác lên mình những thiết kế bay bổng và say mê tận hưởng cảm xúc lứa đôi ngọt ngào.
                    </p>
                    <a href="#" className="see-more">
                        Tìm hiểu thêm
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutHomePage;
