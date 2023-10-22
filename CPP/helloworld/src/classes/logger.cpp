#include <iostream>
using namespace std;

class Log
{

public:
  enum Level
  {
    LevelError = 0,
    LevelWarning,
    LevelInfo
  };

private:
  Level m_loglevel = LevelInfo;

public:
  void setLevel(Level level)
  {
    m_loglevel = level;
  }

  void warn(const char *message)
  {
    if (m_loglevel >= LevelWarning)
    {
      cout << "[WARNING]"
           << " " << message << endl;
    }
  }

  void error(const char *message)
  {
    if (m_loglevel >= LevelError)
    {
      cout << "[ERROR]"
           << " " << message << endl;
    }
  }

  void info(const char *message)
  {
    if (m_loglevel >= LevelInfo)
    {
      cout << "[INFO]"
           << " " << message << endl;
    }
  }
};

int main()
{

  Log log;
  log.setLevel(Log::LevelError);
  log.error("some error");
  log.warn("Hellooo!");
  log.info("More Info");
}