import { Nav, NavItem, Dropdown, DropdownButton } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import getPlant from './plant';

const header = props => {
  const history = useHistory();
  const { variant } = props;

  return (
    <div className={`topbar ${variant}`}>
      <Nav>
        <NavItem href="/home" onClick={() => window.location.replace(`/home`)}>
          Главная
        </NavItem>
        <DropdownButton title={<span>Список</span>} variant="select search">
          {getPlant.Fabaceae.map((item, index) => {
            let num = 1;
            return (
              <Dropdown.Item as="button">
                <Link
                  onClick={() => {
                    sessionStorage.setItem('index', num + index);
                    sessionStorage.setItem('name', item);
                  }}
                  to={{ pathname: `/${num + index}` }}
                >
                  {item}
                </Link>
              </Dropdown.Item>
            );
          })}
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 7);
                sessionStorage.setItem('name', getPlant.Peaceae);
              }}
              to={{ pathname: '/7' }}
            >
              {getPlant.Peaceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 8);
                sessionStorage.setItem('name', getPlant.Myrthaceae);
              }}
              to={{ pathname: '/8' }}
            >
              {getPlant.Myrthaceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 9);
                sessionStorage.setItem('name', getPlant.Rubiaceae);
              }}
              to={{ pathname: '/9' }}
            >
              {getPlant.Rubiaceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 10);
                sessionStorage.setItem('name', getPlant.Verlinexeae);
              }}
              to={{ pathname: '/10' }}
            >
              {getPlant.Verlinexeae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 11);
                sessionStorage.setItem('name', getPlant.Asteraceae);
              }}
              to={{ pathname: '/11' }}
            >
              {getPlant.Asteraceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 12);
                sessionStorage.setItem('name', getPlant.Asteraceae1);
              }}
              to={{ pathname: '/12' }}
            >
              {getPlant.Asteraceae1}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 13);
                sessionStorage.setItem('name', getPlant.Malvaceae);
              }}
              to={{ pathname: '/13' }}
            >
              {getPlant.Malvaceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 14);
                sessionStorage.setItem('name', getPlant.Liliacaceae);
              }}
              to={{ pathname: '/14' }}
            >
              {getPlant.Liliacaceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 15);
                sessionStorage.setItem('name', getPlant.Lythraceae);
              }}
              to={{ pathname: '/15' }}
            >
              {getPlant.Lythraceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 16);
                sessionStorage.setItem('name', getPlant.Caknabaceae);
              }}
              to={{ pathname: '/16' }}
            >
              {getPlant.Caknabaceae}
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <Link
              onClick={() => {
                sessionStorage.setItem('index', 17);
                sessionStorage.setItem('name', getPlant.Acantceceae);
              }}
              to={{ pathname: '/17' }}
            >
              {getPlant.Acantceceae}
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </Nav>
    </div>
  );
};

export default header;
