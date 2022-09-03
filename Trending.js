import { Card, Container, Row, Col, Image } from "react-bootstrap";
import koenokatachi from "../assets/images/trending/koenokatachi.jpg";
import demonslayer from "../assets/images/trending/demonslayer.jpg";
import jujutsukaisen0 from "../assets/images/trending/jujutsukaisen0.jpg";
import kiminonawa from "../assets/images/trending/kiminonawa.jpg";
import kiminosuizouwotabebtai from "../assets/images/trending/kiminosuizouwotabetai.jpg";
import onepiecered from "../assets/images/trending/onepiecered.jpg";

const Trending = () => {
    return (
        <div id="trending">
            <Container>
                <h1 className="text-white pt-4 pb-2">TRENDING MOVIES </h1>
                <Row>
                    {/* Koe No Katachi */}
                    <Col md={4} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={koenokatachi} alt="Koe No Katachi" />
                            <Card.Title className="text-center">Koe No Katachi</Card.Title>
                            <Card.Text className="text-left">
                                berkisah tentang seorang anak laki-laki bernama Shota yang masa SD nya membully seorang anak perempuan lain bernama shoko yang tunarunu.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 6 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    {/* Koe No Katachi End */}

                    <Col md={4} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={demonslayer} alt="demon slayer" />
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
                            <Image src={jujutsukaisen0} alt="jujutsu kaisen 0" />
                            <Card.Title className="text-center">Jujutsu Kaisen 0</Card.Title>
                            <Card.Text className="text-left">
                                berlatar waktu 1 tahun sebelum masuknya Itadori Yuuji ke sekolah jujutsu. Movie ini menceritakan Yuuta yang merupakan murid 1 tingkatan di atas Itadori Yuuji.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 1 month ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={kiminonawa} alt="kimi no nawa" />
                            <Card.Title className="text-center">Kimi No Nawa</Card.Title>
                            <Card.Text className="text-left">
                                menceritakan kisah romansa antara Taki dan Mitsuha yang dihubungakan dengan sebuah kutukan dan dipisahkan antara jarak dan waktu.
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 6 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={kiminosuizouwotabebtai} alt="kimi no suizou wo tabetai" />
                            <Card.Title className="text-center">Kimi No Suizou Wo Tabetai</Card.Title>
                            <Card.Text className="text-left">
                                dengan latar awal rumah sakit, Seorang siswa laki-laki cuek tidak sengaja melihat buku catatan rahasia seorang perempuan yang kebetulan menggunakan seragam sekolah yang sama. 
                            </Card.Text>
                            <Card.Text className="text-left">
                                last update 5 years ago
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="text-light movieimages bg-dark">
                            <Image src={onepiecered} alt="one piece red" />
                            <Card.Title className="text-center">OnePiece Movie: RED</Card.Title>
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

export default Trending;