package com.example.hikana;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;

import java.util.List;

public class adapter extends BaseAdapter {
    private Context context;
    private List<kana> items;
    private LayoutInflater inflater;

    public adapter(Context con, List<kana> items) {
        this.context = con;
        this.items = items;
        this.inflater = LayoutInflater.from(this.context);
    }

    @Override
    public int getCount() {
        return items.size();
    }

    @Override
    public Object getItem(int position) {
        return items.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View view, ViewGroup parent) {
        view = inflater.inflate(R.layout.adapter, null);
        kana current = (kana) getItem(position);
        String name = current.getName();

        ImageView icon = view.findViewById(R.id.img_icon);
        int resId = context.getResources().getIdentifier(name, "drawable", context.getPackageName());
        icon.setImageResource(resId);

        return view;
    }
}
