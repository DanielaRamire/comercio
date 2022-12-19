import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
// fooddetails 
  
foodDetails = [
  {
    id:1,
    foodName:"Aguacate",
    foodDetails:"Las fresas, que alegran la vista y el paladar, son el fruto del fresal, una planta de la familia de las rosáceas...",
    foodPrice:5000,
    foodImg:"https://media.self.com/photos/58af44838557fe118ba60e22/4:3/w_728,c_limit/avoR.jpg"
  },
  {
    id:2,
    foodName:"Tomates",
    foodDetails:"Las fresas, que alegran la vista y el paladar, son el fruto del fresal, una planta de la familia de las rosáceas..",
    foodPrice:5000,
    foodImg:"https://images.ecestaticos.com/sdOBaR_yu1SlyAOg2p7wXEj7ATU=/100x11:1138x790/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd1a%2Fc2d%2F7af%2Fd1ac2d7afc90648e79f7d33fb9d66b8b.jpg"
  },
  {
    id:3,
    foodName:"Guayaba",
    foodDetails:"Las fresas, que alegran la vista y el paladar, son el fruto del fresal, una planta de la familia de las rosáceas..",
    foodPrice:5000,
    foodImg:"https://bienestarenfamilia.com/v1/wp-content/uploads/2018/05/guayaba.jpg"
  },
  {
    id:4,
    foodName:"Limones",
    foodDetails:"Las fresas, que alegran la vista y el paladar, son el fruto del fresal, una planta de la familia de las rosáceas..",
    foodPrice:5000,
    foodImg:"https://www.naranjamania.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_1.jpg"
  },
  {
    id:5,
    foodName:"Naranjas",
    foodDetails:"Las fresas, que alegran la vista y el paladar, son el fruto del fresal, una planta de la familia de las rosáceas..",
    foodPrice:5000,
    foodImg:"http://valenciabonita.es/wp-content/uploads/2016/02/novedades-primavera-2015-naranjas-online1.jpg"
  },
  {
    id:6,
    foodName:"Fresas",
    foodDetails:"Las fresas, que alegran la vista y el paladar, son el fruto del fresal, una planta de la familia de las rosáceas.",
    foodPrice:5000,
    foodImg:"https://img.bekiafit.com/articulos/th/92000/92922-c.jpg"
  }
]




}
