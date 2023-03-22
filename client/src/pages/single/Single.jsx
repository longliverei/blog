import { Link } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';
import './styles.scss';

export const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://culturainglesacuritiba.com.br/wp-content/uploads/2020/09/outono-na-inglaterra.png" alt="" />
                <div className="user">
                    <img src="https://culturainglesacuritiba.com.br/wp-content/uploads/2020/09/outono-na-inglaterra.png" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <p>EDIT</p>
                        </Link>
                        <p>DEL</p>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    )
}