import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../services/api.js";
import BarChartComponent from "../../components/BarChart/BarChart.js";
import SideCard from "../../components/SideCard/SideCard.js";
import RadialBarChartScore from "../../components/RadialBarChart/RadialBarChart.js";
import PerformanceRadarChart from "../../components/RadarChart/RadarChart.js";
import LineChartComponent from "../../components/LineChart/LineChart.js";
import caloriesIcon from "../../assets/images/sidecard-icons/calories.svg";
import glucidesIcon from "../../assets/images/sidecard-icons/glucides.svg";
import lipidesIcon from "../../assets/images/sidecard-icons/lipides.svg";
import proteinesIcon from "../../assets/images/sidecard-icons/proteines.svg";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  // eslint-disable-next-line
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

  if (!userData) return <p>Chargement du profil...</p>;

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
            icon={caloriesIcon}
            value={`${keyData.calorieCount}kCal`}
            label="Calories"
            bgColor="#FFEBE5"
          />
          <SideCard
            icon={proteinesIcon}
            value={`${keyData.proteinCount}g`}
            label="Protéines"
            bgColor="#E5F1FF"
          />
          <SideCard
            icon={glucidesIcon}
            value={`${keyData.carbohydrateCount}g`}
            label="Glucides"
            bgColor="#FFF5DB"
          />
          <SideCard
            icon={lipidesIcon}
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
