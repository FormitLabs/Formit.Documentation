import React from 'react';
import {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                  Страница не найдена
              </h1>
              <p>
                  К сожалению, мы не можем найти нужную вам страницу.
              </p>
              <p>
                  Попробуйте воспользоваться навигацией или найти нужную информацию на <Link to="/">главной странице</Link>.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
