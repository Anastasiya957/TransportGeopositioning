package com.sample.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "ROUTE")
public class Route implements Serializable{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;

    @NotEmpty
    @Column(name = "START_POINT", nullable = false)
    private String startPoint;

    @NotEmpty
    @Column(name = "END_POINT", nullable = false)
    private String endPoint;

    @Column(name = "DATE", nullable = false)
    private Date date;
}
