import SkillItem from "./SkillItem";

export const ProgrammingLanguages = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-600 mb-6">
        Programming Languages
      </h3>

      <div className="space-y-1">
        <SkillItem
          name="C#"
          level="intermediate"
          description="Experience with C# for developing WinForms applications. Some exposure to LINQ and generics, but limited usage. Primarily used with .NET frameworks for backend development."
        />

        <SkillItem
          name="JavaScript"
          level="intermediate"
          description="Comfortable with modern JavaScript features including async/await and some ES6 features. Experience using JavaScript primarily within React applications for frontend development."
        />

        <SkillItem
          name="Python"
          level="intermediate"
          description="Experience with Python primarily through Django REST Framework, Machine Learning with library Keras and TensorFlow."
        />

        <SkillItem
          name="Kotlin"
          level="beginner"
          description="Some past experience with Kotlin for Android development about 3 years ago. Limited recent usage and not familiar with advanced features like coroutines."
        />
      </div>
    </div>
  );
};

export const Frontend = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-600 mb-6">
        Frontend Development
      </h3>

      <div className="space-y-1">
        <SkillItem
          name="React.js"
          level="intermediate"
          description="Comfortable with core React concepts and hooks (useState, useEffect). Experience with Context API for state management. Familiar with React routing and using Axios for data fetching."
        />
      </div>
    </div>
  );
};

export const Backend = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-600 mb-6">
        Backend Development
      </h3>

      <div className="space-y-1">
        <SkillItem
          name="ASP.NET Core"
          level="intermediate"
          description="Experience with setting up ASP.NET Core applications including dependency injection, middleware configuration, and routing. Implementation of JWT authentication with access and refresh tokens. Familiar with password hashing and email services."
        />

        <SkillItem
          name="Django REST Framework"
          level="intermediate"
          description="Experience creating APIs with Django REST Framework, implementing serializers and views. Implemented JWT authentication with access and refresh tokens. Deployed Django applications to production environments (Vercel)."
        />

        <SkillItem
          name=".NET Data Access"
          level="intermediate"
          description="Experience with various data access methods in .NET including Entity Framework Core, ADO.NET, and some exposure to Dapper for database operations."
        />
      </div>
    </div>
  );
};

export const Database = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-blue-600 mb-6">
        Database Management
      </h3>

      <div className="space-y-1">
        <SkillItem
          name="SQL Server"
          level="intermediate"
          description="Professional experience as a data engineer working with SQL Server. Ability to write complex SQL queries and stored procedures. Experience with query optimization using JOINs."
        />

        <SkillItem
          name="PostgreSQL"
          level="intermediate"
          description="Experience using PostgreSQL with Django and potentially .NET applications. Familiar with basic to intermediate level queries and database operations."
        />

        <SkillItem
          name="Data Engineering"
          level="intermediate"
          description="Past experience working as a data engineer, focusing on data manipulation, transformation, and query optimization. Familiar with database design concepts."
        />
      </div>
    </div>
  );
};
