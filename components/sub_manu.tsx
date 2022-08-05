import styles from '../styles/submanu.module.css'

export default function Submanu():JSX.Element
{
    const submenu=[
        
        {key: "menu",label:'Menu'},
        {key: "about-us",label:'About us'},
        {key: "service",label:'Service'},
        {key: "clients",label:'Clients'},
        {key: "inverters",label:'Inverster'},
        {key: "pricing",label:'Pricing'},
        {key: "training",label:'Training'},
        {key: "contact",label:'Contact'},
        
    ]

    return(
        <div className={styles.submenu}>
            <ul>


                {submenu.map(item =>{
                    return(
                        
                        
                        <div key={item.key}>
                            
                            <li><a>{item.label}</a></li>
                            
                        
                        </div>
                    )
                }  
                )}


            </ul>
        </div>

        
    )
}

