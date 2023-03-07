import Dashboard from '../../pages/Dashboard'
import Customer from '../../pages/Customer';
import NewCustomer from '../../pages/NewCustomer';
import Item from '../../pages/Item';
import Login from '../../pages/login';

 export  const SideNavMenuList=[
   
    {
        title:'Dashboard',
        icon:'fa fa-home mr-3',
        link:'/Dashboard',
        component:<Dashboard/>,
        visible:true
    
    },
    {
        title:'Customer',
        icon:'fa fa-user mr-3',
        link:'/Customer',
        component:<Customer/>,
        visible:true
    },
    {
        title:'NewCustomer',
        icon:'fa fa-user mr-3',
        link:'/NewCustomer',
        component:<NewCustomer/>,
        visible:false
    },
    {
        title:'Item',
        icon:'fa fa-user mr-3',
        link:'/Item',
        component:<Item/>,
        visible:true
    },
    {
        title:'Login',
        icon:'fa fa-user mr-3',
        link:'/Login',
        component:<Login/>,
        visible:false

        
    },
    {
        title:'Login',
        icon:'fa fa-user mr-3',
        link:'/Login',
        component:<Login/>,
        visible:false
        
    }
    
];