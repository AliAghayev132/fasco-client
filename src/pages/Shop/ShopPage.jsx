import { ArrowIcon } from "@/components/icons"
import { IconOne } from "@/components/icons"
import { IconTwo } from "@/components/icons"
import { IconThree } from "@/components/icons"

import { Iconn } from "@/components/icons"
import styles from "./ShopPage.module.css"
import image1 from "@/pages/Shop/assets/images/image1.png"
import image2 from "@/pages/Shop/assets/images/image2.png"
import image3 from "@/pages/Shop/assets/images/image3.png"
import image4 from "@/pages/Shop/assets/images/image4.png"
import image5 from "@/pages/Shop/assets/images/image5.png"
import image6 from "@/pages/Shop/assets/images/image6.png"
import image7 from "@/pages/Shop/assets/images/image7.png"
import image8 from "@/pages/Shop/assets/images/image8.png"
import image9 from "@/pages/Shop/assets/images/image9.png"

export const ShopPage = () => {
    return (
        <div className={styles.shoppage}>
            <div className={styles.fashion}>Fashion</div>
            <div className={styles.home1}>
                <div className={styles.home}>Home</div>
                <ArrowIcon />
                <div className={styles.home}>Fashion</div>
            </div>
            <div className={styles.page}>
                <div className={styles.fashion_left}>
                    <div className={styles.filters}>Filters</div>
                    <div className={styles.left_word}>size</div>
                    <div className={styles.btn_size}>
                        <button className={styles.btn}>S</button>
                        <button className={styles.btn}>M</button>
                        <button className={styles.btn}>L</button>
                        <button className={styles.btn}>XL</button>
                    </div>

                    <div className={styles.left_word}>Colors</div>

                    <div className={styles.colors}>

                        <button className={styles.color_red}></button>
                        <button className={styles.color_orange}></button>
                        <button className={styles.color_yellow}></button>
                        <button className={styles.color_blue}></button>
                        <button className={styles.color_darkblue}></button>
                        <button className={styles.color_aqua}></button>
                        <button className={styles.color_purple}></button>
                        <button className={styles.color_pink}></button>
                    </div>



                    <div className={styles.left_word}>Prices</div>
                    <div className={styles.prices}>
                        <p>$0-$50</p>
                        <p>$50-$100</p>
                        <p>$100-$150</p>
                        <p>$150-$200</p>
                        <p>$300-$400</p>
                    </div>

                    <div className={styles.iconn}><div className={styles.left_word}>Brands</div>
                        <div><Iconn /> </div></div>

                    <div className={styles.left_words}>
                        <p>Minimog Retrolie Brook</p>
                        <p>Learts Vagabond Abby</p>
                    </div>
                    <div className={styles.iconn}> <div className={styles.left_word}>Collections</div>
                        <div ><Iconn /> </div></div>
                    <div className={styles.left_words}>
                        <p>All products</p>
                        <p>Best sellers</p>
                        <p>New arrivals</p>
                        <p>Accessories</p>
                    </div>
                    <div className={styles.left_word}>Tags</div>
                    <div className={styles.left_words}>
                        <p>Fashion  Hats  Sandal  Belt  Bags</p>
                        <p>Snacker  Denim  Minimog  Vagabond</p>
                        <p>Sunglasses Beachwear</p>
                    </div><div />
                </div>
                <div className={styles.fashion_right}>

                    <div className={styles.title1}>
                        <div className={styles.title}><p>m-s...</p><p className={styles.black}>Best selling</p></div>
                        <div className={styles.title2}>View Style<div className={styles.icons}><IconOne /> <IconTwo /> <IconThree /> </div> </div>  </div>

                    <div className={styles.photo}>

                        <div className={styles.file1}>
                            <div className={styles.photo1}><img src={image1}></img><p>Rounded Red Hut</p><p>$8.00</p>
                            <div className={styles.onecolor}> <button className={styles.color_yellow}></button><button className={styles.color_black}></button></div></div>
                            <div className={styles.photo2}><img src={image2}></img><p>Linen-blend Shirt</p><p>$17.00</p>
                            <div className={styles.onecolor}><button className={styles.color_blue}></button><button className={styles.color_pink}></button></div><div/>
                            <div className={styles.photo3}><img src={image3}></img><p>Long-sleeve Coat</p><p>$25.00</p>
                            <div className={styles.onecolor}><button className={styles.color_blue}></button><button className={styles.color_darkblue}></button></div></div>
                            </div>
                        </div>
                        <div className={styles.file2}>
                            <div className={styles.photo4}><img src={image4}></img><p>Boxy Denim Hat</p><p>$116.00</p>
                            <div className={styles.onecolor}><button className={styles.color_blue}></button><button className={styles.color_pink}></button></div></div>
                            <div className={styles.photo5}><img src={image5}></img><p>Linen Plain Top</p><p>$40.00</p>
                            <div className={styles.onecolor}><button className={styles.color_yellow}></button><button className={styles.color_red}></button></div></div>
                            <div className={styles.photo6}> <img src={image6}></img><p>Oversized T-shirt</p><p>$25.00</p>
                            <div className={styles.onecolor}><button className={styles.color_blue}></button><button className={styles.color_purple}></button></div></div></div>

                        <div className={styles.file3}>
                            <div className={styles.photo7}> <img src={image7}></img><p>Polarised Sunglasses</p><p>$24.00</p>
                            <div className={styles.onecolor}><button className={styles.color_orange}></button><button className={styles.color_green}></button></div></div>
                            <div className={styles.photo8}> <img src={image8}></img><p>Rockstar Jacket</p><p>$47.00</p>
                            <div className={styles.onecolor}><button className={styles.color_red}></button><button className={styles.color_darkblue}></button></div></div>
                            <div className={styles.photo9}><img src={image9}></img><p>Dotted Black Dress</p><p>$14.00</p>
                            <div className={styles.onecolor}><button className={styles.color_blue}></button><button className={styles.color_pink}></button></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}