import { Avatar } from './Avatar';

import {EditOutlined} from '@ant-design/icons'

import styles from './Sidebar.module.css'

export function Sidebar (){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1589705637779-d959371018dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" 
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/elbertej.png"/>

                <strong>Elbert Silva</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <EditOutlined />
                    Edit your profile
                </a>
            </footer>
        </aside>
    );
}