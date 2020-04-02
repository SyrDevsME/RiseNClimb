import Head from 'next/head';
import Link from 'next/link';
import Layout from '../Layout';
import NavCard from './comps/NavCard';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTitle: 'Dashboard - Rise \'n Climb'
    };
  }

  render() {
    return (
      <Layout title={this.state.pageTitle}>
        <h1>Dashboard</h1>
        <p>Here are the tools at your fingertips to help you get there.</p>

        <NavCard linkHref="./Todos" imgSrc="/todos-icon.png" caption="To-do Lists" />
        <NavCard linkHref="./Goals" imgSrc="/goals-icon.png" caption="S.M.A.R.T. Goals" />
        <NavCard linkHref="" imgSrc="/habits-icon.png" caption="Habit Tracking" />
        <NavCard linkHref="" imgSrc="/time-icon.png" caption="Time Management" />
      </Layout>
    );
  }
}

export default Dashboard;
