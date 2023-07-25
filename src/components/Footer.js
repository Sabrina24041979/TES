import './Footer.css';


const Footer = () => {
    return(
        <footer className="nav-bg-color">
            <section class="backToTop">

                <a href="#top">Remonter en haut</a>
            </section>
            <section class="sommaire">
            <div>
                    <ul>
                        <li><span class="list-title">Projet d'achat</span></li>
                        <li><a href="#">Nos véhicules neufs</a></li>
                        <li><a href="#">Offres du moment</a></li>
                        <li><a href="#">Tous nos modèles</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><span class="list-title">Technologie</span></li>
                        <li><a href="#">Notre vision de la mobilité</a></li>
                        <li><a href="#">Nos solutions de recharges</a></li>
                        <li><a href="#">Services personnalisés</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><span class="list-title">Service Client</span></li>
                        <li><a href="#">Prendre rendez-vous SAV</a></li>
                        <li><a href="#">Offres Après-vente</a></li>
                        <li><a href="#">Campagne de rappel</a></li>
                        <li><a href="#">Notice d'utilisation</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><span class="list-title">Qui sommes-nous ?</span></li>
                        <li><a href="#">L'histoire de JGR</a></li>
                        <li><a href="#">Nous rejoindre</a></li>
                        <li><a href="#">Sport Automobile</a></li>
                        <li><a href="#">Boutique et collections</a></li>
                    </ul>
                </div>
            </section>
            <section class="final m-3 p-3">
                <div>© 2023 JGR, tous droits réservés. Logo by <a href="https://fr.freepik.com/vecteurs-libre/creation-logo-jaguar-degrade_34627061.htm#query=jaguar&position=17&from_view=search&track=sph">Freepik</a>.</div>
                <div><a href="#">Mentions légales</a></div>
                <div>

                </div>           
            </section>

        </footer>

    );
}

export default Footer;