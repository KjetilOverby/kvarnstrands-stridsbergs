import {createContext} from 'react';

import kai from '../../images/kai.jpg';
import morten from '../../images/morten.jpeg';
import tommy from '../../images/tommy.jpg';
import steffen from '../../images/steffen.jpeg';
import thorleif from '../../images/thorleif.jpg';
import servicebil from '../../images/servicebil.jpg';

const Kontaktpersoner = createContext([
    {
        image: kai,
        title: 'Daglig leder, salg',
        name: 'Kai Lundquist',
        mob: '488 99 268',
        epost: 'kai@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut deserunt voluptates modi id dicta ratione ullam dolorum.'
    },
    {
        image: 'https://www.w3schools.com/bootstrap4/img_avatar6.png',
        title: 'Kontor/økonomi',
        name: 'Elisabeth Stuen',
        mob: '952 36 882',
        epost: 'elisabeth@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut deserunt voluptates modi id dicta ratione ullam dolorum.'
    },
    {
        image: morten,
        title: 'Produktsjef Høvleri',
        name: 'Morten Flatset',
        mob: '951 30 191',
        epost: 'morten@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut deserunt voluptates modi id dicta ratione ullam dolorum. Lorem ipsum dolor sit amet consectetur.'
    },
    {
        image: tommy,
        title: 'Produktspesialist Sagbruk',
        name: 'Tommy Aurbekkholen',
        mob: '949 87 318',
        epost: 'tommy@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut ratione ullam dolorum.'
    },
    {
        image: steffen,
        title: 'Produktspesialist Trevare',
        name: 'Steffen Ramstad',
        mob: '917 17 347',
        epost: 'steffen@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut deserunt voluptates modi id dicta ratione ullam dolorum, dolor sit amet consectetu.'
    },
    {
        image: thorleif,
        title: 'Produksjonsleder',
        name: 'Thorleif Edvardsen',
        mob: '952 26 508',
        epost: 'thorleif@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut deserunt voluptates modi.'
    },
    {
        image: servicebil,
        title: 'Transport',
        name: 'Bjørn Simensen',
        mob: '911 16 622',
        epost: 'bjørn@stridsberg.no',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ut deserunt voluptates modi id dicta ratione ullam dolorum.'
    },
    
 
   
])

export default Kontaktpersoner