import { useState } from "react";
import './rowcard.css'

export default function RowCard (props: {user: User}) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = props

  return (
    <>
      <tr 
        className="user-row"
        onClick={() => setIsOpen(!isOpen)}
      >
        <td scope="row">{user.username}</td>
        <td scope="row">{user.email}</td>
        <td scope="row">{user.company.name}</td>
        <td scope="row">{user.postcounts.length}</td>
      </tr>
      <tr 
        onClick={() => setIsOpen(!isOpen)}
      >
        <td colSpan={4} className="posts-card">
          <div className={`user-posts ${isOpen ? 'user-posts--open': ''}`}>
            <div className="user-posts-inner">
              <ul>
                {user.postcounts.map((post, index) => {
                  return (
                    <li className="card" key={`post_${index}`}>{post.title}</li>
                  )
                })}
              </ul>
            </div>            
          </div>
        </td>
      </tr>
    </>
  )
}