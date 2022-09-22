import { useState } from 'react';
import { Avatar } from '../Avatar';

import {ClearOutlined, LikeOutlined} from '@ant-design/icons'

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handledeDeleteComment () {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="21 de setembro às 20:05h" dateTime="2022-09-21">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handledeDeleteComment} title="Deletar comentário">
                            <ClearOutlined />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button title="Curtir" onClick={handleLikeComment}>
                        <LikeOutlined /> 
                        Curtir<span>{likeCount}</span>
                    </button> 
                </footer>
            </div>
        </div>
    );
}