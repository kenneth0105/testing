import styles from '../styles/submanu.module.css'

export default function Submanu():JSX.Element
{
    const submenu=[
        
        {title: "title1",content:'Menu'},
        {title: "title2",content:'About us'},
        {title: "title3",content:'Service'},
        {title: "title4",content:'Clients'},
        {title: "title5",content:'Inverster'},
        {title: "title6",content:'Pricing'},
        {title: "title7",content:'Training'},
        {title: "title8",content:'Contact'},
        
    ]

    return(
        <div className={styles.submenu}>
            <ul >


                {submenu.map(item =>{
                    return(
                        
                        
                        <div key={item.title} >
                            
                            <li ><a href='#'>{item.content}</a></li>
                            
                        
                        </div>
                    )
                }  
                )}


            </ul>
        </div>

        
    )
}

