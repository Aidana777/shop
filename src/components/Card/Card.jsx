import './card.css';
function Card(){
    return(
        <section>
           <div>
           <img src="/photo/image 26.png" alt="" className='out-img' />
           <h2 className='out-title'>New Products</h2>
           </div>
        
        <div className='cards'> 
        <article className="card">
        <small className="card__status">in stock</small>
          <img src="/photo/1.png"alt="" className="card__img"/>
          <div className="review"></div>
          <h1 className="card-title">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </h1>
          <p className="card__price--old">$499.00</p>
          <p className="card__price">$499.00</p>
        </article>
        <article className="card">
        <small className="card-non__status">check availability </small>
          <img src="/photo/image 29 (1).png"alt="" className="card__img"/>
          <div className="review"></div>
          <h1 className="card-title">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </h1>
          <p className="card__price--old">$499.00</p>
          <p className="card__price">$499.00</p>
        </article>
        <article className="card">
        <small className="card__status">  in stock</small>
          <img src="/photo/image 29 (2).png"alt="" className="card__img"/>
          <div className="review"></div>
          <h1 className="card-title">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </h1>
          <p className="card__price--old">$499.00</p>
          <p className="card__price">$499.00</p>
        </article>
        <article className="card">
        <small className="card__status">in stock</small>
          <img src="/photo/image 29 (3).png"alt="" className="card__img"/>
          <div className="review"></div>
          <h1 className="card-title">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </h1>
          <p className="card__price--old">$499.00</p>
          <p className="card__price">$499.00</p>
        </article>
        <article className="card">
        <small className="card__status">in stock</small>
          <img src="/photo/image 29 (2).png"alt="" className="card__img"/>
          <div className="review"></div>
          <h1 className="card-title">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </h1>
          <p className="card__price--old">$499.00</p>
          <p className="card__price">$499.00</p>
        </article>
        <article className="card">
        <small className="card__status">in stock</small>
          <img src="/photo/image 29 (2).png"alt="" className="card__img"/>
          <div className="review"></div>
          <h1 className="card-title">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
          </h1>
          <p className="card__price--old">$499.00</p>
          <p className="card__price">$499.00</p>
        </article>
        </div>
      </section>
      
    )
}
export default Card;