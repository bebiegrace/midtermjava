package midtermjava;
public class professionals {

        public static String io;
        String username;
        Integer Idnumber;
        String job;
    
        public professionals(String username, Integer Idnumber, String job){
            this.username = username;
            this.Idnumber = Idnumber;
            this.job = job;
        }
       
        public String getUsername(){
            return username;
        }
        public void setUsername(String username){
            this.username = username;
        }
        
    
        public Integer getID() {
            return Idnumber;
        }
        public void setID(Integer Idnumber){
            this.Idnumber = Idnumber;
        }

        
        public String getJob() {
            return job;
        }
        public void setJob(String job){
            this.job = job;
        }
    
}
