import React from 'react';
import Sales from './Sales';
import { faker } from '@faker-js/faker';
import Activities from './Activities';
import Todo from './Todo';

const Card = () => (
  <div className="cards d-flex">
    <div className="sales">
      <Sales />
    </div>
    <div>
      <Sales name="Top Authors" dp={faker.image.avatar()} />
    </div>
    <div className="activities card">
      <h4>Activities</h4>
      <Activities
        time="8:42"
        text="Outlines keep you honest. And keep structure"
      />
      <br />
      <Activities time="10:00" text="AEOL meeting" />
      <br />
      <Activities time="10:00" text="Make deposit USD 700. to ESL" />
      <br />
      <Activities
        time="16:50"
        text="Indulging in poorly driving and keep structure keep great"
      />
      <br />
      <Activities time="16:50" text="New order placed #XF-2356." />
      <br />
      <Activities
        time="16:50"
        text="Indulging in poorly driving and keep structure keep great"
      />
      <br />
      <Activities time="16:50" text="New order placed #XF-2356." />
      <br />
      <Activities
        time="16:50"
        text="Finance KPI Mobile app launch preparion meeting"
      />
      <br />
    </div>
    <div className="todo card">
      <h4>Todo</h4>
      <Todo text='Create FireStone Logo' />
      <Todo text='Stakeholder Meeting' />
      <Todo text='Scoping & Estimations' />
      <Todo text='KPI App Showcase' />
      <Todo text='Project Meeting' />
      <Todo text='Customers Update' />
    </div>
  </div>
);

export default Card;
