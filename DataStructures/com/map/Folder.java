package com.map;

import java.util.UUID;

public class Folder {

   private int id;
    private String title;
    private int parentId;

    public Folder() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    @Override
    public String toString() {
        return "Folder{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", parentId=" + parentId +
                '}';
    }
}
