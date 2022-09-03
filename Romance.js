import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bunnygirlsenpai from "../assets/images/romance/bunnygirlsenpai.jpg"
import chuunibyoukoigashitai from "../assets/images/romance/chuunibyoukoigashitai.jpg"
import herbluesky from "../assets/images/romance/herbluesky.jpg"
import kiminosuizouwotabetai from "../assets/images/romance/kiminosuizouwotabetai.jpg"
import tamakolovestory from "../assets/images/romance/tamakolovestory.jpg"
import weatheringwithyou from "../assets/images/romance/weatheringwithyou.jpg"

const Romance = () => {
    return (
        <div id="romance">
            <Container>
                <h1 className="text-white pt-4 pb-2">ROMANCE MOVIES </h1>
                <Row>
                    {/* Koe No Katachi */}
                    <Col md={3} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={bunnygirlsenpai} alt="bunny girl senpai" />
                            <Card.Title className="text-center">Bunny Girl Senpai</Card.Title>
                            <Card.Text className="text-left">
                                berkisah tentang seorang anak laki-laki bernama Shota yang masa SD nya membully seorang anak perempuan lain bernama shoko yang tunarunu.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 6 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    {/* Koe No Katachi End */}

                    <Col md={3} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={chuunibyoukoigashitai} alt="demon slayer" />
                            <Card.Title className="text-center">Demon Slayer Movie</Card.Title>
                            <Card.Text className="text-left">
                                Lanjutan dari series sebelumnya Demon Slayer, Tanjirou dan kawan-kawan melanjutkan perjalanannya sebagai pemburu iblis. bertiga menjalankan misi mugen train lalu bertemu pilar api.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 2 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={herbluesky} alt="her blue sky" />
                            <Card.Title className="text-center">Her Blue Sky</Card.Title>
                            <Card.Text className="text-left">
                                berlatar waktu 1 tahun sebelum masuknya Itadori Yuuji ke sekolah jujutsu. Movie ini menceritakan Yuuta yang merupakan murid 1 tingkatan di atas Itadori Yuuji.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 1 month ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={kiminosuizouwotabetai} alt="kimi no suizou wo tabetai" />
                            <Card.Title className="text-center">Kimi No Suizou Tabetai</Card.Title>
                            <Card.Text className="text-left">
                                menceritakan kisah romansa antara Taki dan Mitsuha yang dihubungakan dengan sebuah kutukan dan dipisahkan antara jarak dan waktu.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 6 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={tamakolovestory} alt="tamako love story" />
                            <Card.Title className="text-center">Tamako Love Story</Card.Title>
                            <Card.Text className="text-left">
                                dengan latar awal rumah sakit, Seorang siswa laki-laki cuek tidak sengaja melihat buku catatan rahasia seorang perempuan yang kebetulan menggunakan seragam sekolah yang sama. 
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 5 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={3} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={weatheringwithyou} alt="weathering with you" />
                            <Card.Title className="text-center">Weathering With You</Card.Title>
                            <Card.Text className="text-left">
                                Luffy melanjutkan petualangannya, kali ini bajak laut mugiwara bertemu dengan Uta yang merupakan teman masa kecil Luffy, sekaligus anak dari shanks. Berbeda dengan movie-movie sebelumnya, kali ini luffy terlibat dengan pertarungan shanks.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 2 hours ago
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >


    )
}

export default Romance;