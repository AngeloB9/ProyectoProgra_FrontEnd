import React, { Component } from 'react';

//Versión 1 del navbar
class Prueba extends Component {
  render() {
    return (
      <div className='contenedorBarrafootF'>
        <div className='barrafootF'>
          <table className='footIconTableF'>
            <tbody>
              <tr>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.facebook.com'
                    rel='noopener noreferrer'>
                    <span>I1</span>
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.twitter.com'
                    rel='noopener noreferrer'>
                    <span>I2</span>
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.youtube.com'
                    rel='noopener noreferrer'>
                    <span>I3</span>
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.instagram.com'
                    rel='noopener noreferrer'>
                    <span>I4</span>
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.google.com'
                    rel='noopener noreferrer'>
                    <span>I5</span>
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.spotify.com'
                    rel='noopener noreferrer'>
                    <span>I6</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className='footLinea1F'>
            <table className='footItemTableF'>
              <tbody>
                <tr>
                  <td className='footitemF'>
                    <ul className='footLinkList'>
                      <li>
                        <h6 className='footTitle'>Github</h6>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href='https://github.com/AngeloB9/ProyectoProgra_FrontEnd'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Frontend
                        </a>
                      </li>

                      <li>
                        <a
                          className='footLink'
                          href=''
                          target='_blank'
                          rel='noopener noreferrer'>
                          Backend - Proximamente
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td className='footitemF'>
                    <ul className='footLinkList'>
                      <li>
                        <h6 className='footTitle'>Tecnologías</h6>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href='https://nextjs.org/docs'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Next Js
                        </a>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href='https://docs.microsoft.com/en-us/dotnet/framework/'
                          target='_blank'
                          rel='noopener noreferrer'>
                          .NetFramework
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='HuellaPersonal'>
            Made with Love 🤍 by Angelo Benavidez
          </div>
          <div className='footInfo'>
            <table className='footInfoTable'>
              <tbody>
                <tr>
                  <td>2021 © Tickets PA.</td>
                  <td className='infoDerecha'>Whatsapp: +593 99 50 83 003</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Prueba;
