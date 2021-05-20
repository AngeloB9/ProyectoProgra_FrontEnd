import React, { Component } from 'react';

//Versión 1 del navbar
class Prueba extends Component {
  render() {
    return (
      <div className='contenedorBarrafoot'>
        <div className='barrafoot'>
          <table className='footIconTable'>
            <tbody>
              <tr>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.facebook.com'
                    rel='noopener noreferrer'>
                    <span>Icono 1</span>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.twitter.com'
                    rel='noopener noreferrer'>
                    <span>Icono 2</span>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.youtube.com'
                    rel='noopener noreferrer'>
                    <span>Icono 3</span>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.instagram.com'
                    rel='noopener noreferrer'>
                    <span>Icono 4</span>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.google.com'
                    rel='noopener noreferrer'>
                    <span>Icono 5</span>
                  </a>
                </td>
                <td className='footicon'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.spotify.com'
                    rel='noopener noreferrer'>
                    <span>Icono 6</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className='footLinea1'>
            <table className='footItemTable'>
              <tbody>
                <tr>
                  <td className='footitem'>
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
                  <td className='footitem'>
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

          <div className='footInfo'>
            <table className='footInfoTable'>
              <tbody>
                <tr>
                  <td>
                    2021 © Tickets PA. Design with Love 🤍 by Angelo Benavidez
                  </td>
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
