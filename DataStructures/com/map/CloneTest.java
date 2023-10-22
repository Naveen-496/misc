package com.map;

import java.util.ArrayList;
import java.util.List;
public class CloneTest {

    static int HOME_FOLDER_ID = 00000;
    public  List<Folder> createFolders() {
        List<Folder> sourceFolders = new ArrayList<Folder>();
        Folder f1 = new Folder();
        f1.setId(1);
        f1.setTitle("post");
        f1.setParentId(HOME_FOLDER_ID);

        Folder f2 = new Folder();
        f2.setId(1);
        f2.setTitle("post");
        f2.setParentId(HOME_FOLDER_ID);

        Folder f3 = new Folder();
        f3.setId(1);
        f3.setTitle("post");
        f1.setParentId(HOME_FOLDER_ID);

        Folder f4 = new Folder();
        f4.setId(1);
        f4.setTitle("post");
        f4.setParentId(HOME_FOLDER_ID);

        sourceFolders.add(f1);

        return sourceFolders;
    }

    public static void main(String[] args) {


    }
}
