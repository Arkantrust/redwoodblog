import { Link, routes } from '@redwoodjs/router'

export default () => (
  <main>
    <style
      dangerouslySetInnerHTML={{
        __html: `
              html, body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
                Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                background-color: #121212;
              }

              html * {
                box-sizing: border-box;
              }

              main {
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                text-align: center;
                height: 100vh;
              }

              section {
                display: flex;
                flex-direction: column;
                background-color: #1e1e1e;
                border-radius: 0.25rem;
                width: 32rem;
                padding: 1rem;
                margin: 0 auto;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              }

              h1 {
                font-size: 1.8rem;
                margin: 0;
                font-weight: 500;
                color: cadetblue;
              }

              button {
                background-color: cadetblue;
                font-size: 1rem;
                color: white;
                border: none;
                border-radius: 0.25rem;
                padding: 0.5rem 1rem;
                cursor: pointer;
                margin-top: 1rem;
              }

              #button-tag {
                text-decoration: none;
                color: #1f1f1f;
              }
            `,
      }}
    />
    <section>
      <>
        <h1>Oops. Seems there&apos;s nothing here...</h1>
        <button>
          <Link id="button-tag" to={routes.home()}>
            Go back home
          </Link>
        </button>
      </>
    </section>
  </main>
)
