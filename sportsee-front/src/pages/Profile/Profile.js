import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../services/api.js";
import "./profile.css";
import BarChartComponent from "../../components/BarChart/BarChart.js";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData(id);
        const activity = await getUserActivity(id);
        const sessions = await getUserAverageSessions(id);
        const performance = await getUserPerformance(id);

        setUserData(user);
        setUserActivity(activity);
        setUserAverageSessions(sessions);
        setUserPerformance(performance);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (!userData) return <div>Loading...</div>;

  return (
    <section className="profile-container">
      <header className="header">
        <h1>
          Bonjour <span>{userData.userInfos.firstName}</span>
        </h1>
        <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
      </header>
      <section className="main-content">
        <section className="bar-chart">
          <BarChartComponent data={userActivity.sessions} />
        </section>
        <section className="line-chart">{/* CALL DE LINE CHART */}</section>
        <section className="radar-chart">{/* CALL DE RADAR CHART */}</section>
        <section className="radial-bar-chart">
          {/* CALL DE RADIAL BAR CHART */}
        </section>
        <section className="sidecard">{/* CALL DE SIDE CARD */}</section>
      </section>
    </section>
  );
};

export default Profile;
