import "./App.css";
import Container from "./Components/Container";
import Heading from "./Components/Heading";
import Flex from "./Components/Flex";
import Menu from "./Components/Menu";
import Button from "./Components/Button";
import Image from "../src/Components/Image";
import logo from "../src/assets/fresh.png";
import model from "../src/assets/model.png";
import Card from "./Components/Card";
import meye from "../src/assets/meye.png";
import jeans from "../src/assets/jeans.png";
import juta from "../src/assets/juta.png";
import model2 from "../src/assets/model2.png";
import seller1 from "../src/assets/seller1.png";
import seller2 from "../src/assets/seller2.png";

function App() {
  return (
    <>
      <div className=" bg-[#FAE3B6] pt-[60px] pb-[140px] rounded-[20px]">
        <Container>
          <div className="mb-[115px]">
            <Flex>
              <div className="w-[15%]">
                <Image imgsrc={logo} altsrc={"logo"} />
              </div>
              <div className="w-[60%] justify-center flex">
                <Menu
                  navMenu={"Men"}
                  className={"px-[20px] font-pop  font-semibold text-[24px]"}
                />
                <Menu
                  navMenu={"Women"}
                  className={"px-[20px]  font-pop font-semibold text-[24px]"}
                />
                <Menu
                  navMenu={"Kids"}
                  className={"px-[20px] font-pop font-semibold text-[24px]"}
                />
                <Menu
                  navMenu={"Collection"}
                  className={"px-[20px] font-pop font-semibold text-[24px]"}
                />
                <Menu
                  navMenu={"Trends"}
                  className={"px-[20px] font-pop font-semibold text-[24px]"}
                />
              </div>
              <div className="w-[25%]">
                <Flex className={"gap-[20px]"}>
                  <Button
                    btnText="Login"
                    className={
                      "font-pop  font-semibold text-[24px] py-[8px] px-[30px] rounded-[10px] border-2 border-[#FFD687] hover:bg-[#FDBB57] duration-500"
                    }
                  />
                  <Button
                    btnText="Signup"
                    className={
                      "font-pop  font-semibold text-[24px] py-[8px] px-[26px] rounded-[10px] border-2 border-[#FFD687] hover:bg-[#FDBB57] duration-500"
                    }
                  />
                </Flex>
              </div>
            </Flex>
          </div>
          <div className="">
            <Flex>
              <div className="w-[50%] pr-[120px]">
                <h1 className="text-[64px] font-semibold font-pop mb-[20px] mt-[30px]">
                  Find The Best Fashion Style For You
                </h1>
                <p className="text-[22px] font-pop mb-[70px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
                  odio pellentesque mattis pulvinar felis. At arcu ornare
                  rhoncus, elementum non viverra.
                </p>
                <Button
                  btnText={"SHOP NOW"}
                  className={
                    "text-[24px] font-semibold font-pop w-[320px] rounded-[10px] px-[90px] py-[20px] bg-black text-white"
                  }
                />
              </div>
              <div className="w-[50%]">
                <Image imgsrc={model} altsrc={"model"}  className={'w-[100%]'}/>
              </div>
            </Flex>
          </div>
        </Container>
      </div>

      {/* collection part start */}
      <div className="pt-[230px] pb-[170px] ">
        <div className="max-w-maxcontainer m-auto">
          <h2 className="flex justify-center text-[64px] font-bold font-frank pb-[125px]">
            {" "}
            New Collection
          </h2>
          <Flex className={"justify-between"}>
            <Card className={"relative"}>
              <Image imgsrc={meye} altsrc={"meye"} />
              <Button
                btnText={"Sweater"}
                className={
                  " text-[24px] font-pop absolute bottom-[30px] left-[50%] translate-x-[-50%] py-[10px] px-[90px] rounded-[20px] bg-white "
                }
              />
            </Card>
            <Card className={"relative"}>
              <Image imgsrc={jeans} altsrc={"jeans"} />
              <Button
                btnText={"Jeans"}
                className={
                  " text-[24px] font-pop absolute bottom-[30px] left-[50%] translate-x-[-50%] py-[10px] px-[90px] rounded-[20px] bg-white "
                }
              />
            </Card>
            <Card className={"relative"}>
              <Image imgsrc={juta} altsrc={"juta"} className={"h-[400px]"} />
              <Button
                btnText={"Basket"}
                className={
                  " text-[24px] font-pop absolute bottom-[30px] left-[50%] translate-x-[-50%] py-[10px] px-[90px] rounded-[20px] bg-white "
                }
              />
            </Card>
          </Flex>
        </div>
      </div>
      {/* collection part end */}

      {/* fashion part start */}
      <section className="mb-[320px] ">
        <Container>
          <Flex>
            <div className="w-[50%] ">
              <Image
                imgsrc={model2}
                altsrc={"model2"}
                className={"relative z-10"}
              />
            </div>
            <div className="w-[50%] pl-[130px] relative">
              <h1 className="text-[64px] font-bold font-frank mt-[85px] mb-[30px]">
                Best Fashion Since 2010
              </h1>
              <p className="text-[24px] font-semibold font-pop pr-[100px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
                odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
                elementum non viverra.
              </p>
              <div className="w-[790px] h-[280px] bg-[#FEECC8] absolute bottom-[-200px] right-0 rounded-[20px]">
                <Flex className={"justify-around translate-y-[50%] "}>
                  <div className=" ">
                    <h1 className="text-[64px] font-bold font-kova">2010</h1>
                    <p className="text-[28px] font-medium font-pop ">Founded</p>
                    {/* <div className="after:content-[''] absolute after:h-[20px] w-[5px] bg-red-500  top-0 right-[100px]"></div> */}
                  </div>
                  <div className="">
                    <h1 className="text-[64px] font-bold font-kova">2010</h1>
                    <p className="text-[28px] font-medium font-pop">Founded</p>
                  </div>
                  <div className="">
                    <h1 className="text-[64px] font-bold font-kova">2010</h1>
                    <p className="text-[28px] font-medium font-pop">Founded</p>
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
      {/* fashion part end */}

      {/* seller part start */}
      <section className="pt-[50px] pb-[215px] bg-[#cfa485]">
        <div className="max-w-maxcontainer m-auto">
          <Flex className={"justify-between"}>
            <div className="w-[35%]">
              <h1 className="text-[64px] font-bold font-frank leading-[1.2] text-white mb-[30px]">
                Best Seller Product
              </h1>
              <div className="mr-[25px]">
                <p className="text-[24px] font-bold font-frank leading-[1.5] text-white mb-[30px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                  neque, velit tortor quam at donec etiam bibendum sagittis.
                  Libero tempor, lacus amet, scelerisque neque mauris odio risus
                  nec. Nisl, parturient at morbi morbi sit arcu. At integer
                  maecenas tortor non lectus.
                </p>
              </div>
              <Button
                btnText={"Learn MORE"}
                className={
                  "py-[25px] px-[90px] w-[320px] rounded-[10px] text-white text-[23px] font-semibold font-pop bg-black"
                }
              />
            </div>
            <div className=" mt-[20px] w-[27%] h-[450px]   ">
              <Image imgsrc={seller1} altsrc={"seller1"} />
              <div className="h-[125px] bg-white p-[18px]">
                <Flex className={" gap-[7px] mb-[10px]"}>
                  <i class="fa-solid fa-star text-[#ffaf37] "></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                </Flex>
                <h1 className="text-[22px] font-semibold font-pop mb-[8px]">
                  Sweater Shirt
                </h1>
                <Flex className={"gap-[40px]"}>
                  <div className="">
                    <Flex
                      className={
                        "leading-[0.9] gap-[5px] text-[24px] text-[#d2d2d2]"
                      }
                    >
                      <i class="fa-solid fa-dollar-sign"></i>
                      <h1 className="">45.99</h1>
                    </Flex>
                  </div>
                  <div className="">
                    <Flex
                      className={
                        "leading-[0.9] gap-[5px] text-[24px] text-[#202020]"
                      }
                    >
                      <i class="fa-solid fa-dollar-sign"></i>
                      <h1 className="">35.99</h1>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </div>
            <div className=" mt-[20px] w-[27%] h-[450px]   ">
              <Image imgsrc={seller2} altsrc={"seller2"} />
              <div className="h-[125px] bg-white p-[18px]">
                <Flex className={" gap-[7px] mb-[10px]"}>
                  <i class="fa-solid fa-star text-[#ffaf37] "></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                  <i class="fa-solid fa-star text-[#ffaf37]"></i>
                </Flex>
                <h1 className="text-[22px] font-semibold font-pop mb-[8px]">
                  Pants fashion
                </h1>
                <Flex className={"gap-[40px]"}>
                  <div className="">
                    <Flex
                      className={
                        "leading-[0.9] gap-[5px] text-[24px] text-[#d2d2d2]"
                      }
                    >
                      <i class="fa-solid fa-dollar-sign"></i>
                      <h1 className="">55</h1>
                    </Flex>
                  </div>
                  <div className="">
                    <Flex
                      className={
                        "leading-[0.9] gap-[5px] text-[24px] text-[#202020]"
                      }  >
                      <i class="fa-solid fa-dollar-sign"></i>
                      <h1 className="">44.99</h1>
                    </Flex>
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </div>
      </section>

      {/* seller part end */}
    </>
  );
}

export default App;
