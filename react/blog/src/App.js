import Blog from './blog';
import { faker } from '@faker-js/faker';
import Action from './Action';
const App = () => {
  return (
    <div className="container">
      <h1>Users</h1>
      <Action>
        <Blog name="Asvin" time="1hr ago" dp={faker.image.avatar()} />
      </Action>
      <Action>
        <Blog name="Gopi" time="2hr ago" dp={faker.image.avatar()} />
      </Action>
      <Action>
        <Blog name="Basi" time="3hr ago" dp={faker.image.avatar()} />
      </Action>
      <Action>
        <Blog name="Abhi" time="4hr ago" dp={faker.image.avatar()} />
      </Action>
    </div>
  );
};
export default App;
