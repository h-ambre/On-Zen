import praticien from "../../assets/Praticien1.jpg"
import mapImage from "../../assets/map.png"
import {
    StarIcon,
    PhoneIcon,
    MapPinIcon,
    CalendarIcon,
    UserIcon,
    ClockIcon
} from '@heroicons/react/20/solid'

const product = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
    return (
        <div className="bg-bg-blue flex flex-col justify-center items-center">
            <div className="xl:justify- flex justify-center w-full pb-3">
                <div className="flex flex-row justify-around flex-wrap ssm:flex-col">
                    <div key="praticien"
                         className="ssm:pt-3 group relative flex flex-col flex-auto justify-center items-center text-center">
                        <div
                            className="h-52 w-52 ssm:h-28 ssm:w-28">
                            <img
                                src={praticien}
                                className="w-full h-full object-cover object-center rounded-full shadow-1xl"
                            />
                        </div>
                        <div className=" justify-between xl:flex ssm:hidden">
                            <div className="mt-6">
                                <h4 className="sr-only">Avis</h4>
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center">
                                        {[0].map((rating) => (
                                            <StarIcon
                                                key="3.9"
                                                aria-hidden="true"
                                                className={classNames(
                                                    1 > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 ssm:h-3 ssm:w-3 flex-shrink-0',
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <p className="ms-2 text-sm font-bold text-gray-900">4,5/5</p>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <a href="#"
                                       className="text-sm font-medium text-gray-900 underline hover:no-underline text-blue">16
                                        avis</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col flex-auto justify-around ssm:text-center ssm:justify-center ssm:items-center ssm:mb-3 ssm:mt-3">
                        <div>
                            <h1 className="text-3xl ssm:text-xl text-blue">Dr. Sophie Lefebvre</h1>
                            <h2 className="text-xl ssm:text-sm text-blue">Chirurgienne Cardiaque</h2>
                        </div>
                        <div className="ssm:flex ssm:justify-center ssm:items-center ssm:flex-col">
                            <div className="pt-3 flex flex-row items-center ssm:hidden xl:flex">
                                <MapPinIcon className="h-4 w-4 text-blue"/>
                                <h2 className="text-base text-blue m-1">Hôpital de Lille</h2>
                            </div>
                            <div className="flex flex-row items-center ssm:hidden xl:flex">
                                <PhoneIcon className="h-4 w-4 text-blue"/>
                                <h2 className="text-base text-blue m-1">06 45 67 89 10</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-auto justify-center items-center text-center">
                        <div>
                            <h2 className="ssm:hidden xl:flex text-3xl text-blue">Prochaines disponibilités :</h2>
                            <h3 className="pt-3 ssm:hidden xl:flex text-xl text-blue mb-6 items-center justify-center">12 mai 2025</h3>
                            <button
                                type="button"
                                className="hover:bg-light-blue ssm:text-sm xl:text-xl sm:inline-flex flex-row items-center rounded-3xl bg-blue px-3 py-2 text-xl font-semibold text-white border-2 border-blue shadow-sm"
                            >
                                <CalendarIcon className="ssm:hidden xl:flex h-5 w-5 justify-center items-center text-white m-2"/>
                                Prendre rendez-vous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex bg-white w-11/12 ssm:flex ssm:rounded-lg lg:rounded-t-lg ssm:shadow-lg ssm:flex-col ssm:p-2">
                <div className="hidden ssm:flex ssm:flex-row ssm:items-center ssm:mb-1">
                    <MapPinIcon className="h-4 w-4 text-blue m-1.5"/>
                    <h2 className="text-base text-blue font-semibold">Adresse</h2>
                </div>
                <div className="ssm:mb-3 ssm:flex space-x-4 xl:flex space-x-24">
                    <button
                        type="button"
                        className="ssm:text-xs sm:inline-flex items-center rounded-3xl bg-light-blue px-3 py-2 text-xl font-semibold text-white border-2 border-blue shadow-sm"
                    >
                        Lieu 1
                    </button>
                    <button
                        type="button"
                        className="hover:bg-light-blue ssm:text-xs sm:inline-flex items-center rounded-3xl bg-blue px-3 py-2 text-xl font-semibold text-white border-2 border-blue shadow-sm"
                    >
                        Lieu 2
                    </button>
                    <button
                        type="button"
                        className="hover:bg-light-blue ssm:text-xs sm:inline-flex items-center rounded-3xl bg-blue px-3 py-2 text-xl font-semibold text-white border-2 border-blue shadow-sm"
                    >
                        Lieu 3
                    </button>
                </div>
                <div className="">
                    <h2 className="text-sm text-blue font-semibold">Hôpital</h2>
                    <h3 className="text-sm font-semibold">Hôpital de Lille</h3>
                    <h3 className="text-sm font-normal">123 Rue des Coeurs</h3>
                    <h4 className="text-sm font-normal">59000 Lille</h4>
                    {/*<div className="ssm:hidden">*/}
                    {/*    <h1 className="text-3xl text-blue">Accès et Transport</h1>*/}
                    {/*    <ul>*/}
                    {/*        <li className="">Metro - Coeur - Ligne 1</li>*/}
                    {/*        <li className="">Bus Port de Lille</li>*/}
                    {/*        <li className="">Parking disponible à proximité de l'hôpital avec des places réservées pour*/}
                    {/*            les*/}
                    {/*            patients*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*    <h1 className="text-3xl text-blue">Accessiblité</h1>*/}
                    {/*    <h3>L'hôpital est entièrement accessible aux personnes à mobilité réduite avec des rampes, des*/}
                    {/*        ascenseurs et des toilettes adaptées.</h3>*/}
                    {/*</div>*/}
                </div>
            </div>
            <hr/>
            <div className="flex bg-white w-11/12 ssm:flex ssm:rounded-b-lg ssm:shadow-lg ssm:flex-col ssm:p-2">
                <div className="">
                    <div className="">
                        <h2 className="text-sm text-blue font-semibold">Accès et Transport</h2>
                        <ul>
                            <li className="text-sm font-normal">Metro - Coeur - Ligne 1</li>
                            <li className="text-sm font-normal">Bus Port de Lille</li>
                            <li className="text-sm font-normal">Parking disponible à proximité de l'hôpital avec des
                                places réservées pour
                                les
                                patients
                            </li>
                        </ul>
                        <h2 className="text-sm text-blue font-semibold">Accessiblité</h2>
                        <h3 className="text-sm font-normal">L'hôpital est entièrement accessible aux personnes à
                            mobilité réduite avec des rampes, des
                            ascenseurs et des toilettes adaptées.</h3>
                    </div>
                </div>
            </div>
            <div className="flex bg-white w-11/12 ssm:flex ssm:rounded-lg ssm:shadow-lg ssm:flex-col ssm:p-2 mt-3">
                <div className="hidden ssm:flex ssm:flex-row ssm:items-center ssm:mb-1">
                    <UserIcon className="h-4 w-4 text-blue m-1.5"/>
                    <h2 className="text-base text-blue font-semibold">Présentation</h2>
                </div>
                <div className="mb-3">
                    <p className="text-xs font-normal">
                        Le Dr. Sophie Lefebvre est une chirurgienne cardiaque renommée avec plus de 15 ans d'expérience.
                        Diplômée de l'Université de Lille et spécialisée à l'Hôpital Européen Georges-Pompidou, elle
                        maîtrise des techniques avancées comme le pontage coronarien et la réparation des valves
                        cardiaques.
                    </p>
                </div>

                <div className="ssm:hidden items-center  xl:flex space-x-5 xl:inline-flex xl:justify-start xl:flex-row">
                    <h2 className="text-base text-blue font-semibold">Spécialités</h2>
                    <span
                    className="hover:bg-light-blue ssm:text-xs sm:flex-col items-center rounded-3xl bg-blue px-3 py-2 text-xl font-medium text-white">
                            Soins Cardio-Thoraciques
                    </span>

                    <span
                        className="hover:bg-light-blue ssm:text-xs sm:flex-col items-center rounded-3xl bg-blue px-3 py-2 text-xl font-medium text-white">
                            Réparations Valvulaires
                    </span>
                    <span
                        className="hover:bg-light-blue ssm:text-xs sm:flex-col items-center rounded-3xl bg-blue px-3 py-2 text-xl font-medium text-white">
                            Suivi Post-Opératoire
                    </span>
                </div>
            </div>
            <div className="flex bg-white w-11/12 ssm:flex ssm:rounded-lg ssm:shadow-lg ssm:flex-col ssm:p-2 mt-3 mb-3">
                <div className="hidden ssm:flex ssm:flex-row ssm:items-center ssm:mb-1">
                    <CalendarIcon className="h-4 w-4 text-blue m-1.5"/>
                    <h2 className="text-base text-blue font-semibold">Evenement a venir</h2>
                </div>
                <div className="">
                    <div className="">
                        <h3 className="text-sm text-blue font-semibold">23 juillet de 17h à 18h</h3>
                        <h3 className="text-sm text-blue font-semibold">Rencontre avec Mme Lefebvre</h3>
                        <h3 className="text-sm font-semibold">Hôpital de Lille, Salle de conférence B</h3>
                        <p className="text-sm font-normal">Une rencontre ouverte à tous pour discuter des dernières
                            avancées en chirurgie cardiaque, avec une séance de questions-réponses.</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-white w-11/12 ssm:flex ssm:rounded-lg ssm:shadow-lg ssm:flex-col ssm:p-2 mb-3">
                <div className="hidden ssm:flex ssm:flex-row ssm:items-center ssm:mb-1">
                    <ClockIcon className="h-4 w-4 text-blue m-1.5"/>
                    <h2 className="text-base text-blue font-semibold">Horaires et Coordonnées</h2>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="">
                        <h3 className="text-sm text-blue font-semibold">Horaires d'ouverture</h3>
                        <ul className="mb-3">
                            <li>Lundi :
                                08h30 - 18h30
                            </li>
                            <li>Mardi :
                                08h30 - 18h30
                            </li>
                            <li>Mercredi :
                                08h30 - 18h30
                            </li>
                            <li>Jeudi :
                                08h00 - 17h00
                            </li>
                            <li>Vendredi :
                                08h00 - 17h00
                            </li>
                            <li>Samedi :
                                09h00 - 12h00
                            </li>
                        </ul>
                        <h2 className="text-sm text-blue font-semibold">Numéro de téléphone</h2>
                        <h2>03 20 55 09 72</h2>
                    </div>
                    <div className="hidden md:block mr-4">
                        <h2 className="text-sm text-blue font-semibold">Contact d'urgence</h2>
                        <p>En cas d'urgence, contactez le 15 (Samu)</p>
                    </div>
                </div>
            </div>

        </div>
    )
}