package se.kth.sda6.skeleton.toys;

import javax.persistence.*;

/**
 *  Class to create Toy objects, with hibernate notations so it will be converted into a table.
 *  includes getters and setters
 **/

@Entity
@Table(name = "toy")
public class Toy {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "toyName")
    private String toyName;

    @Column(name = "toyPrice")
    private int toyPrice;

    @Column(name = "toyPhoto")
    private String toyPhoto;

    //@ManyToOne()
    //private User user;

    public Toy() {
    }

    /*public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/

    public Toy(String toyName, int toyPrice, String toyPhoto) {
        this.toyName = toyName;
        this.toyPrice = toyPrice;
        //this.user = user;
        this.toyPhoto = toyPhoto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToy_Name() {
        return toyName;
    }

    public void setToy_Name(String toyName) {
        this.toyName = toyName;
    }

    public int getToy_Price() {
        return toyPrice;
    }

    public void setToy_Price(int toyPrice) {
        this.toyPrice = toyPrice;
    }

    public String getToy_Photo() {
        return toyPhoto;
    }

    public void setToy_Photo(String toyPhoto) {
        this.toyPhoto = toyPhoto;
    }
}

