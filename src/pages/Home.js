
import image1 from "../images/slide_image_1.jpg";
import image2 from "../images/slide_image_2.jpg";
import image3 from "../images/slide_image_3.jpg";
import './Home.css';

const Home = () => {
    
    return(
    <div>
        <section>

            <h1 className="Home-title">L'automobile de luxe, un marché restreint.</h1>

        </section>
      
        <div className="carousel-container" >
git 
            <div className="carousel" data-bs-ride="carousel">

                <div className="slide">
                    <img src={require("../images/slide_image_1.jpg")} className="d-block w-100" alt="..."/>
                </div>

                <div className="slide">
                    <img src={require("../images/slide_image_2.jpg")} className="d-block w-100" alt="..."/>
                </div>

                <div className="slide">
                    <img src={require("../images/slide_image_3.jpg")} className="d-block w-100" alt="..."/>
                </ div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-container" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carousel-container" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </div>
            
   

        <div>
    
            <section className="texte">
                <h2 className="Para-title">Bilan des 5 dernières années</h2>
            </section>

        </div>

        <div>
       

            <p className="para">
                <p>Lorem ipsum dolor sit amet. Et suscipit facilis aut quia distinctio eos dignissimos libero sit quos voluptatem ad laudantium corporis et voluptatem minima est quae architecto. Et animi veritatis et sequi voluptas sit sequi adipisci cum quia beatae ea obcaecati voluptates cum labore tempora. Est nisi quaerat sit cupiditate incidunt est nisi delectus vel corporis illum ad consectetur maxime id libero laboriosam.
                </p>
                

                <p>Sit magni sapiente ut dolore excepturi est officiis odio est aspernatur adipisci non autem illum id dolorem quia qui unde perferendis! Est aliquam consequatur sit distinctio harum est nemo magni ut molestiae numquam eum delectus nisi quo exercitationem sunt.
                </p>
        
                <p>Aut sequi sint sit amet eveniet qui dicta voluptas cum voluptatum praesentium est illo eius. Non fugit officiis aut Quis aperiam in consequatur dolorum qui pariatur sapiente eum similique doloribus. Ad debitis molestiae quo optio omnis id quia recusandae. Ut sint quia aut galisum dolorum eos doloremque error in consequuntur facere.
                </p>

                <p>Nam odio eveniet nam quia vero aut corporis delectus et ratione facere id possimus ipsam qui dolores velit et optio possimus. Id repudiandae dolor in dolores ducimus eum repudiandae aliquid et voluptatum deserunt ut modi sapiente rem eligendi repudiandae. Et tempore beatae eum velit autem ea fugit autem et reprehenderit mollitia quo saepe dolores est repudiandae atque rem impedit molestiae. Et aliquid quod id consectetur quod et voluptatum repudiandae.<br/>

                Eum consequatur laudantium ut quia aperiam rem quis possimus quo vitae veniam quo earum quia et sunt blanditiis non quibusdam eveniet. Sed iure fugit qui sint aperiam ea error architecto qui reiciendis iure est minima consectetur.
                </p>
            </p>

      
        </div>
    </div>
    
    
    )
    }
    export default Home