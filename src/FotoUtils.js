import Leone from './foto/leone.png';
import Aereo from './foto/aereo.png';
import Auto from './foto/automobile.png';
import Elefante from './foto/elefante.png';
import Vestito from './foto/abito.png';
import Banana from './foto/banana.png';
import Ananas from './foto/ananas.png';
import Arancia from './foto/arancia.png';
import Autobus from './foto/autobus.png';
import Avocado from './foto/avocado.png';
import Balena from './foto/balena.png';
import Bicicletta from './foto/bicicletta.png';
import Birra from './foto/birra.png';
import Body from './foto/body.png';
import Borsa from './foto/borsa.png';
import Bracciale from './foto/bracciale.png';
import Caffe from './foto/caffè.png';
import Calzino from './foto/calzino.png';
import Cane from './foto/cane.png';
import Cappello from './foto/cappello.png';
import Cavallo from './foto/cavallo.png';
import Cavalluccio from './foto/cavalluccio.png';
import Ciabatta from './foto/ciabatta.png';
import Ciambella from './foto/ciambella.png';
import CioccolataCalda from './foto/cioccolata_calda.png';
import Coccodrillo from './foto/coccodrillo.png';
import Cocomero from './foto/cocomero.png';
import Corona from './foto/corona.png';
import Corallo from './foto/corallo.png';
import Costume from './foto/costume.png';
import Foca from './foto/foca.png';
import Fragola from './foto/fragola.png';
import Furgone from './foto/furgone.png';
import Giraffa from './foto/giraffa.png';
import Granchio from './foto/granchio.png';
import Grembiule from './foto/grembiule.png';
import Leopardo from './foto/leopardo.png';
import Lepre from './foto/lepre.png';
import Limone from './foto/limone.png';
import Maglietta from './foto/maglietta.png';
import Maiale from './foto/maiale.png';
import Mirtilli from './foto/mirtilli.png';
import Moto from './foto/moto.png';
import Mucca from './foto/mucca.png';
import Muffin from './foto/muffin.png';
import Nave from './foto/nave.png';
import Ombrello from './foto/ombrello.png';
import Orso from './foto/orso.png';
import Panino from './foto/panino.png';
import Pantaloni from './foto/pantaloni.png';
import Pappagallo from './foto/pappagallo.png';
import Pecora from './foto/pecora.png';
import Pera from './foto/pera.png';
import Pesca from './foto/pesca.png';
import Pesce from './foto/pesce.png';
import Pinguino from './foto/pinguino.png';
import Pipistrello from './foto/pipistrello.png';
import Polpo from './foto/polpo.png'
import Pulcino from './foto/pulcino.png';
import Rana from './foto/rana.png'
import Rinoceronte from './foto/rinoceronte.png';
import Scarpa from './foto/scarpa.png';
import Scimmia from './foto/scimmia.png';
import Serpente from './foto/serpente.png';
import Squalo from './foto/squalo.png';
import Taxi from './foto/taxi.png';
import Tigre from './foto/tigre.png';
import Toro from './foto/toro.png';
import Treno from './foto/treno.png';
import Uva from './foto/uva.png';
import Vino from './foto/vino.png';
import Volpe from './foto/volpe.png';
import Zembra from './foto/zebra.png';






import uuid from "uuid/v4";


const itemsFromBackend = [
    {id: uuid(), src: Leone, name: "animali"},
    {id: uuid(), src: Aereo, name: "trasporti"},
    {id: uuid(), src: Auto, name: "trasporti"},
    {id: uuid(), src: Elefante, name: "animali"},
    {id: uuid(), src: Vestito, name: "abbigliamento"},
    {id: uuid(), src: Banana, name: "cibo"},
    {id: uuid(), src: Ananas, name: "cibo"},
    {id: uuid(), src: Arancia, name: "cibo"},
    {id: uuid(), src: Autobus, name: "trasporti"},
    {id: uuid(), src: Avocado, name: "cibo"},
    {id: uuid(), src: Balena, name: "animali"},
    {id: uuid(), src: Bicicletta, name: "trasporti"},
    {id: uuid(), src: Birra, name: "cibo"},
    {id: uuid(), src: Body, name: "abbigliamento"},
    {id: uuid(), src: Borsa, name: "abbigliamento"},
    {id: uuid(), src: Bracciale, name: "abbigliamento"},
    {id: uuid(), src: Caffe, name: "cibo"},
    {id: uuid(), src: Calzino, name: "abbigliamento"},
    {id: uuid(), src: Cane, name: "animali"},
    {id: uuid(), src: Cappello, name: "abbigliamento"},
    {id: uuid(), src: Cavallo, name: "animali"},
    {id: uuid(), src: Cavalluccio, name: "animali"},
    {id: uuid(), src: Ciabatta, name: "abbigliamento"},
    {id: uuid(), src: Ciambella, name: "cibo"},
    {id: uuid(), src: CioccolataCalda, name: "cibo"},
    {id: uuid(), src: Coccodrillo, name: "animali"},
    {id: uuid(), src: Cocomero, name: "cibo"},
    {id: uuid(), src: Corona, name: "abbigliamento"},
    {id: uuid(), src: Corallo, name: "animali"},
    {id: uuid(), src: Costume, name: "abbigliamento"},
    {id: uuid(), src: Foca, name: "animali"},
    {id: uuid(), src: Fragola, name: "cibo"},
    {id: uuid(), src: Furgone, name: "trasporti"},
    {id: uuid(), src: Giraffa, name: "animali"},
    {id: uuid(), src: Granchio, name: "animali"},
    {id: uuid(), src: Grembiule, name: "abbigliamento"},
    {id: uuid(), src: Leopardo, name: "animali"},
    {id: uuid(), src: Lepre, name: "animali"},
    {id: uuid(), src: Limone, name: "cibo"},
    {id: uuid(), src: Maglietta, name: "abbigliamento"},
    {id: uuid(), src: Maiale, name: "animali"},
    {id: uuid(), src: Mirtilli, name: "cibo"},
    {id: uuid(), src: Moto, name: "trasporti"},
    {id: uuid(), src: Mucca, name: "animali"},
    {id: uuid(), src: Muffin, name: "cibo"},
    {id: uuid(), src: Nave, name: "trasporti"},
    {id: uuid(), src: Ombrello, name: "abbigliamento"},
    {id: uuid(), src: Orso, name: "animali"},
    {id: uuid(), src: Panino, name: "cibo"},
    {id: uuid(), src: Pantaloni, name: "abbigliamento"},
    {id: uuid(), src: Pappagallo, name: "animali"},
    {id: uuid(), src: Pecora, name: "animali"},
    {id: uuid(), src: Pera, name: "cibo"},
    {id: uuid(), src: Pesca, name: "cibo"},
    {id: uuid(), src: Pesce, name: "animali"},
    {id: uuid(), src: Pinguino, name: "animali"},
    {id: uuid(), src: Pipistrello, name: "animali"},
    {id: uuid(), src: Polpo, name: "animali"},
    {id: uuid(), src: Pulcino, name: "animali"},
    {id: uuid(), src: Rana, name: "animali"},
    {id: uuid(), src: Rinoceronte, name: "animali"},
    {id: uuid(), src: Scarpa, name: "abbigliamento"},
    {id: uuid(), src: Scimmia, name: "animali"},
    {id: uuid(), src: Serpente, name: "animali"},
    {id: uuid(), src: Squalo, name: "animali"},
    {id: uuid(), src: Taxi, name: "trasporti"},
    {id: uuid(), src: Tigre, name: "animali"},
    {id: uuid(), src: Toro, name: "animali"},
    {id: uuid(), src: Treno, name: "trasporti"},
    {id: uuid(), src: Uva, name: "cibo"},
    {id: uuid(), src: Vino, name: "cibo"},
    {id: uuid(), src: Volpe, name: "animali"},
    {id: uuid(), src: Zembra, name: "animali"}

];


export default {itemsFromBackend};