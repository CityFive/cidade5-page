
interface Activity {
  id: number,  
  title: string;
  text: string;
  buttonContent?: string;
  imageUrl:string
}
export const ActivitiesData: Array<Activity> = [
  { 
    id: 0,
    title: "Cultos dominicais",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    buttonContent: "Consultar horarios",
    imageUrl:"https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",
  },
  {
    id: 1,
    title: "Grupos de Edificação",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    buttonContent: "Visitar grupos de edificação",
    imageUrl:"https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",

  },
  {
    id: 2,
    title: "Discipulado",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    imageUrl:"https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",
    
  },
  {
    id: 3,
    title: "Classe de Membresia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dictum sem, eu facilisis magna maximus vitae. Nulla eu venenatis odio. Nulla eu venenatis odio. Nulla eu venenatis odio.",
    buttonContent: "Fazer parte da classe",
    imageUrl:"https://tv.joycemeyer.org/portuguese/wp-content/uploads/sites/35/2020/06/887.jpg",

  },
];
