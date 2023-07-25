import '../Galerie.css';


const Galerie = () => {
    return (
        <section>
            <h1 className="galtitle">GALERIE</h1>

            <div className="gallerypic">
                <div className="card">
                    <img src={require("../images/pexels-călin-răzvan-12658202.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">L'A3 Sportback 40 TFSI e (204 ch) est rejoint par l'A3 Sportback 45 TFSI e, plus puissante. Elle combine le moteur à essence 1.4 TFSI de 150 ch et 250 Nm avec un moteur électrique de 80 kW (109 ch) et 330 Nm. La puissance du système est de 245 hp et 400 Nm.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={require("../images/pexels-alex-amorales-909907.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Chez Audi Sport, les ingénieurs ont décidé de mêler esthétique et performances. Si les nouveaux appendices stylistiques près des feux n'ont aucun intérêt aérodynamique, le pack extérieur en carbone (-3 kg pour 4.250 euros), les freins carbo-céramique (7.300 euros) ou encore les jantes en aluminium creusées ont eux un but commun : faire gagner des kilos ! Du carbone qu'on trouve également dans l'habitacle avec d'autres matériaux de qualité comme du cuir avec surpiqûres ou de l'Alcantara. Bien évidemment la présentation est irréprochable, la finition très soignée même si certains plastiques font tout de même tâche pour un véhicule de ce tarif. D'autant plus que par rapport à la concurrence, les Mercedes C63 AMG (88.800 €) et BMW M4 (85.800 €), la RS5 est plus chère et demande presque 20.000 euros supplémentaires d'options afin d'avoir un modèle complet. Ce qui la place en termes de prix, directement face à une Porsche 911 Carrera S (114.575 €). De quoi lui faire perdre une bonne partie de son charme !</p>
                    </div>
                </div>

                <div className="card">
                    <img src={require("../images/pexels-collin-nederhood-13213768.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Corvette et Camaro : les deux seuls noms émouvants pour les mordus de la conduite. Puissance à l’état pur sous le capot, technologies les plus récentes pour en profiter : ces voitures transforment chaque trajet en une expérience passionnante.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={require("../images/pexels-s-von-hoerst-2920064.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Technologique et intelligent, TUCSON Hybrid apparaît comme une référence sur le segment des SUV compacts. Profitez d’une connectivité de pointe et d’une sécurité optimale, notamment de systèmes avancés d’assistance au conducteur.</p>
                    </div>
                </div></div>
        </section>

    )
}
export default Galerie