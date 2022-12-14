import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import './styles.scss'
export const Header = () => {
  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className='logo'>Todoist</div>
        <div className='settings'>
          <ul>
            <li className='settings__add'>
              <button data-testid='quick-add-task-action' aria-label='Quick add task' type='button'>
                +
              </button>
            </li>
            <li className='settings__darkmode'>
              <button data-testid='dark-mode-action' aria-label='Darkmode on/off' type='button'>
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
