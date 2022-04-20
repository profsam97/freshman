import { faDolly, faHospital, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const services = [
    {
    name :  'Hospitality',
    icon: <FontAwesomeIcon icon={faHospital}  className='fab'/>,
     categories: [
      'Cooks',
      'Walters',
      'Office/Cleanup',
      'Delivery',
     ]
       },
     {
    name :  'Retail',
    icon: <FontAwesomeIcon icon={faDolly}  className='fab'/>,
      categories: [
      'Cashiers',
      'Sales Associate',
      'Store Manager',
      'Store Warehouse',
      ],
    },
     {
    name :  'Warehousing',
    icon: <FontAwesomeIcon icon={faShop}  className='fab'/>,
    categories: [
    'Warehouse Worker',
     'Stock Clerk',
   'Merchandise Pickup',
   'Dispatchers',
    ]
    }
]
export default services;