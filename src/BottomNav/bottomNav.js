import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUser,faUserFriends, faServer,  faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const BottomNav = () => {
    return (
        <div className="btm-nav-wrapper">
          <div className="btm-nav">
            <Link>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faUserFriends} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faComment} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faServer} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
        </div>
    )
}

export default BottomNav