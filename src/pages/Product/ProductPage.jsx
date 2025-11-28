import styles from "./ProductPage.module.css"
// photos
import one from "@/assets/images/one.png"
import two from "@/assets/images/two.png"
import three from "@/assets/images/three.png"
import main from "@/assets/images/main.png"
import four from "@/assets/images/four.png"
import five from "@/assets/images/five.png"
import six from "@/assets/images/six.png"
import card from "@/assets/images/card.png"

import { BoxIcon, CarIcon, CompareIcon, EmptyIcon, EyeIcon, QuestionIcon, ShareIcon, StarIcon } from "@/components/icons"
import CartModal from "@/components/modals/CartModal/CartModal"
import { useState } from "react"
import { ProgressBar } from "@/components/ProgressBar/ProgressBar"

export const ProductPage = () => {
    const [showCartModal, setShowCartModal] = useState(false)

        const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : count );
    
    return (
        <div className={styles.hero__section}>
            {
                showCartModal && <CartModal onClose={() => setShowCartModal(false)} />
            }
            <div className={styles.hero__part}>
                <div className={styles.hero__left}>
                    <img className={styles.image__par} src={one} />
                    <img className={styles.image__par} src={six} />
                    <img className={styles.image__par} src={main} />
                    <img className={styles.image__par} src={three} />
                    <img className={styles.image__par} src={four} />
                    <img className={styles.image__par} src={five} />
                    <img className={styles.image__par} src={two} />
                </div>
                <div className={styles.hero__middle}>
                    <img className={styles.image__main} src={main} />
                </div>
            </div>
            <div className={styles.hero__right}>
                <h5 className={styles.brand__name}>FASCO</h5>
                <div className={styles.product__star}>
                    <p className={styles.product__name}>Denim Jacket </p>
                    <div className={styles.product__favorite}> <EmptyIcon /></div>
                </div>

                <div className={styles.stars} >
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <EmptyIcon />

                    <span className={styles.number}>(4)</span>
                </div>
                <div className={styles.prices}>
                    <p className={styles.price}>$39.00</p>
                    <p className={styles.past__price}>$59.00</p>
                    <button className={styles.price__btn}>SAVE 33%</button>
                </div>
                <div className={styles.eye__part} >
                    <EyeIcon />
                    <p className={styles.eye}>24 people are viewing this right now</p>
                </div>
                <div className={styles.sale__time}>
                    <h5 className={styles.sale__title}>Hurry up! Sale ends in :</h5>
                    <p className={styles.sale__oclock}>00 : 05 : 59 : 47</p>
                </div>
                <p className={styles.stock}>Only 9 item(s) left in stock!</p>
                <ProgressBar total={1000} current={5} />
                <p className={styles.product__size}>Size: M</p>
                <div className={styles.size__btns}>
                    <button className={styles.size__btn}>M</button>
                    <button className={styles.size__btn__d}>L</button>
                    <button className={styles.size__btn__d}>XL</button>
                    <button className={styles.size__btn__d}>XXL</button>


                </div>
                <p className={styles.product__size}>Color: Blue</p>
                <div className={styles.color__circle}>
                    <div className={styles.circle__c}>
                        <div className={styles.color}></div>
                    </div>
                    <div className={styles.color__b}></div>
                    <div className={styles.color__p}></div>

                </div>
                <h5 className={styles.quanity}>Quantity</h5>
                <div className={styles.main__btns}>
                    <div className={styles.math__btns}>
                        <button className={styles.minus} onClick={decrement}>-</button>
                        <button className={styles.count}>{count}</button>
                        <button className={styles.plus} onClick={increment}>+</button>
                    </div>
                    <div className={styles.card__btn}>
                        <button className={styles.card} onClick={() => setShowCartModal(true)} >Add to cart</button>
                    </div>
                </div>
                <div className={styles.help}>
                    <div className={styles.help__b}>
                        <CompareIcon />
                        <p className={styles.help__t}>Compare</p>
                    </div>
                    <div className={styles.help__b}>
                        <QuestionIcon />
                        <p className={styles.help__t}>Ask a question</p>
                    </div>
                    <div className={styles.help__b}>
                        <ShareIcon />
                        <p className={styles.help__t}>Share</p>
                    </div>

                </div>
                <div className={styles.description}>
                    <div className={styles.description__box}>
                        <CarIcon />
                        <h5 className={styles.description__t}>Estimated Delivery:</h5>
                        <p className={styles.description__time}>Jul 30 - Aug 03</p>
                    </div>
                    <div className={styles.description__box}>
                        <BoxIcon />
                        <h5 className={styles.description__t}>Free Shipping & Returns: </h5>
                        <p className={styles.description__time}>On all orders over $75</p>
                    </div>

                </div>
                <div className={styles.card__info}>
                    <img className={styles.card__img} src={card} />
                    <p className={styles.card__d}>Guarantee safe & secure checkout</p>
                </div>
            </div>
        </div>
    )
}