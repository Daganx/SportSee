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
import SideCard from "../../components/SideCard/SideCard.js";
import RadialBarChartScore from "../../components/RadialBarChart/RadialBarChart.js";
import PerformanceRadarChart from "../../components/RadarChart/RadarChart.js";
import LineChartComponent from "../../components/LineChart/LineChart.js";

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

  if (!userData) return <div>Chargement du profil...</div>;

  const { keyData, todayScore, score } = userData;
  const userScore = todayScore || score;

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
        <section className="line-chart">
          <LineChartComponent data={userAverageSessions.sessions} />
        </section>
        <section className="radar-chart">
          <PerformanceRadarChart
            performanceData={userPerformance.data}
            kind={userPerformance.kind}
          />
        </section>
        <section className="radial-bar-chart">
          <RadialBarChartScore score={userScore} />
        </section>
        <section className="sidecard">
          <SideCard
            icon="path/to/fire-icon.png"
            value={`${keyData.calorieCount}kCal`}
            label="Calories"
            bgColor="#FFEBE5"
          />
          <SideCard
            icon="path/to/protein-icon.png"
            value={`${keyData.proteinCount}g`}
            label="Protéines"
            bgColor="#E5F1FF"
          />
          <SideCard
            icon="path/to/carbs-icon.png"
            value={`${keyData.carbohydrateCount}g`}
            label="Glucides"
            bgColor="#FFF5DB"
          />
          <SideCard
            icon="path/to/fat-icon.png"
            value={`${keyData.lipidCount}g`}
            label="Lipides"
            bgColor="#FFE5E5"
          />
        </section>
      </section>
    </section>
  );
};

export default Profile;
