import React from 'react'

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        {`${
          count > 1 ? `Всем ${count} пользователям` : `Пользователю`
        }  отправлено приглашение.`}
      </p>
      {/* Плохая практика поскольку страница обновляется */}
      <button
        onClick={() => window.location.reload()}
        href="/"
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  )
}
