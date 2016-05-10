class CreateHourlyAverage < ActiveRecord::Migration
  def change
    create_table :hourly_averages do |t|
      t.string :day
      t.integer :time
      t.float :noise
      t.integer :num_measurements

      t.timestamps
    end
  end
end
